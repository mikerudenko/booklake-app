import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

import { LakesSlice } from './lakes.slice';
import { LakesState } from './lakes.types';
import { FISHING_DAY_TIME_TYPES } from '@booklake/core';
import { getEmptyBookedLakePlaces } from './lakes.helpers';
import { createFeatureSelector } from '../../store-utils';

export const selectLakesFeature = createFeatureSelector<LakesState>(
  LakesSlice.name,
);

export const selectLakes = createSelector(
  selectLakesFeature,
  ({ lakes }) => lakes.data,
);

export const selectLakesNetworkStatus = createSelector(
  selectLakesFeature,
  ({ lakes }) => lakes.networkStatus,
);

export const selectLakePlaces = createSelector(
  selectLakesFeature,
  ({ lakePlaces }) => lakePlaces.data,
);

export const selectLakePlacesNetworkStatus = createSelector(
  selectLakesFeature,
  ({ lakePlaces }) => lakePlaces.networkStatus,
);

export const selectLakeFishings = createSelector(
  selectLakesFeature,
  ({ lakeFishings }) => lakeFishings.data,
);

export const selectLakeFishingsNetworkStatus = createSelector(
  selectLakesFeature,
  ({ lakeFishings }) => lakeFishings.networkStatus,
);

export const selectLakeBookedPlaces = createSelector(
  selectLakesFeature,
  ({ bookedPlaces }) => bookedPlaces.data,
);

export const selectLakeBookedPlacesNetworkStatus = createSelector(
  selectLakesFeature,
  ({ bookedPlaces }) => bookedPlaces.networkStatus,
);

export const constructSelectLakeById = (lakeId: string) =>
  createSelector(selectLakes, lakes => lakes[lakeId] || null);

export const constructSelectLakeByIdPlaces = memoize((lakeId: string) =>
  createSelector(selectLakePlaces, lakePlaces =>
    lakeId && lakePlaces[lakeId] ? lakePlaces[lakeId] : [],
  ),
);

export const constructSelectLakeByIdFishings = memoize((lakeId: string) =>
  createSelector(selectLakeFishings, lakeFishings =>
    lakeId && lakeFishings[lakeId] ? lakeFishings[lakeId] : [],
  ),
);

export const constructSelectLakeByIdBookedPlaces = memoize((lakeId: string) =>
  createSelector(selectLakeBookedPlaces, bookedPlaces =>
    lakeId && bookedPlaces[lakeId] ? bookedPlaces[lakeId] : {},
  ),
);

export const selectLakeFilters = createSelector(
  selectLakesFeature,
  ({ lakeFilters }) => lakeFilters,
);

export const constructSelectLakeByIdFreePlacesCount = memoize(
  (lakeId: string) =>
    createSelector(
      selectLakes,
      selectLakeBookedPlaces,
      selectLakeFilters,
      (lakes, bookedPlaces, { dayTimeType, date }) => {
        if (!lakeId) {
          return 0;
        }

        const lakesPlacesCount = lakes[lakeId] ? lakes[lakeId].placesCount : 0;
        const lakeByIdBookedPlaces = bookedPlaces[lakeId]
          ? bookedPlaces[lakeId]
          : getEmptyBookedLakePlaces(date);

        return (
          lakesPlacesCount -
          lakeByIdBookedPlaces[FISHING_DAY_TIME_TYPES.allDay].length -
          (dayTimeType ? lakeByIdBookedPlaces[dayTimeType].length : 0)
        );
      },
    ),
);
