import createDecorator from 'final-form-calculate';
import {
  Fishing,
  FISHING_TYPES,
  LAKE_PLACE_TYPE,
  LakePlace,
} from '@booklake/core';

const modifyFishings = <Criteria>(
  criteria: Criteria[],
  key: string,
  fishings?: Fishing[],
) => {
  return fishings
    ? fishings.map((fishingPrice: any) => {
        if (!criteria.includes(fishingPrice[key])) {
          fishingPrice = { ...fishingPrice, active: false };
        }
        return fishingPrice;
      })
    : [];
};

export const lakeSettingsDecorator = createDecorator(
  {
    field: 'fishingTypes',
    updates: {
      fishings: (fishingTypes: FISHING_TYPES[], allValues?: any) => {
        return modifyFishings<FISHING_TYPES>(
          fishingTypes,
          'fishingType',
          allValues?.fishings,
        );
      },
    },
  },
  {
    field: 'placeTypes',
    updates: {
      fishings: (placeTypes: LAKE_PLACE_TYPE[], allValues?: any) => {
        return modifyFishings<LAKE_PLACE_TYPE>(
          placeTypes,
          'placeType',
          allValues?.fishings,
        );
      },
    },
  },
  {
    field: 'places',
    updates: {
      placesCount: (places: LakePlace[]) => places.length,
    },
  },
  {
    field: 'fishings',
    updates: {
      minFishingPrice: (fishings: Fishing[]) =>
        Math.min(...fishings?.map(({ price }) => price)),
    },
  },
);
