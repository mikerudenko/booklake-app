import map from 'lodash/map';

import { getLakeBookedPlaces } from './api.lakes';
import {
  FISH_TYPES,
  Lake,
  LAKE_OPTION_TYPES,
  FISHING_DAY_TIME_TYPES,
  FISHING_TYPES,
} from '@booklake/core';
import { isArrayInSubArray } from '../services/helper-service';
import { firebaseFirestore } from '../services/firebase-service';

// TODO place this in cloud function
const filterLakesByFishTypes = (fish: FISH_TYPES[], lakes: Lake[]) =>
  lakes.filter(lake => isArrayInSubArray<FISH_TYPES>(fish, lake.fishTypes));

const filterLakesByOptions = (options: LAKE_OPTION_TYPES[], lakes: Lake[]) =>
  lakes.filter(lake =>
    isArrayInSubArray<LAKE_OPTION_TYPES>(options, map(lake.fishTypes, 'type')),
  );

const filterByDateTimeType = (
  dayTimeType: FISHING_DAY_TIME_TYPES,
  lakes: Lake[],
) => lakes.filter(({ dayTimeTypes }) => dayTimeTypes.includes(dayTimeType));

const filtersMap = {
  options: filterLakesByOptions,
  fish: filterLakesByFishTypes,
  dayTimeType: filterByDateTimeType,
};

const filterLakesByDate = async (
  rawLakesResponse: any,
  date?: string,
  dayTimeType?: FISHING_DAY_TIME_TYPES,
) => {
  const lakes: Lake[] = [];
  const lakeBookedPlacesRequests: Promise<any>[] = [];

  rawLakesResponse.forEach(
    async (document: firebase.firestore.QueryDocumentSnapshot) => {
      const data = document.data();
      const id = document.id;

      if (date) {
        lakeBookedPlacesRequests.push(
          getLakeBookedPlaces({ lakeId: id, date }),
        );
      }
      lakes.push({ id, ...(data as Lake) });
    },
  );

  if (!date) {
    return lakes;
  }

  const dateSnaps = await Promise.all(lakeBookedPlacesRequests);

  return lakes.filter((lake, index) => {
    if (!dateSnaps[index] || !dateSnaps[index].docs[0]) {
      return true;
    }
    const bookedPlaces = dateSnaps[index].docs[0].data();
    const bookedPlacesCount =
      bookedPlaces[FISHING_DAY_TIME_TYPES.allDay].length -
      (dayTimeType ? bookedPlaces[dayTimeType] : 0);

    return lake.placesCount - bookedPlacesCount > 0;
  });
};

const createLakeQuery = (fishingType?: FISHING_TYPES) => {
  let query: any = firebaseFirestore
    .collection('lakes')
    .where('active', '==', true);

  if (fishingType) {
    query = query.where('fishingTypes', 'array-contains', fishingType);
  }

  return query.get();
};

export const getLakeList = async (filters: any) => {
  const { date, fishingType, dayTimeType } = filters;
  const rawLakesResponse = await createLakeQuery(fishingType);
  let lakes = await filterLakesByDate(rawLakesResponse, date, dayTimeType);

  Object.keys(filtersMap).forEach((key: string) => {
    // @ts-ignore
    if (filters[key]) {
      // @ts-ignore
      lakes = filtersMap[key](filters[key], lakes);
    }
  });

  return lakes;
};
