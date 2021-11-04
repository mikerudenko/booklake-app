import {
  LakePlace,
  Fishing,
  LakeOption,
  FISHING_TYPES,
  FISHING_DAY_TIME_TYPES,
  FISH_TYPES,
  LAKE_OPTION_TYPES,
  Lake,
  BookedPlacesPerDay,
} from '@booklake/core';
import { WithNetworkStatus } from '../../store-utils';

export interface GetLakeByIdPlacesPayload {
  places: LakePlace[];
  lakeId: string;
}

export interface GetLakeByIdFishingsPayload {
  fishings: Fishing[];
  lakeId: string;
}

export interface GetLakeByIdOptionsPayload {
  options: LakeOption[];
  lakeId: string;
}

export type GetBookedPlacesRequestPayload = {
  lakeId: string;
  date: string;
};

export interface GetBookedPlacesDaySuccessPayload {
  lakeId: string;
  bookedPlaces: BookedPlacesPerDay;
}

export interface LakesState {
  lakes: WithNetworkStatus<Record<string, Lake>>;
  lakePlaces: WithNetworkStatus<Record<string, LakePlace[]>>;
  lakeFishings: WithNetworkStatus<Record<string, Fishing[]>>;
  bookedPlaces: WithNetworkStatus<Record<string, BookedPlacesPerDay>>;
  lakeFilters: LakeListFilters;
}

export type LakeListFilters = Partial<{
  fishingType: FISHING_TYPES;
  date: string;
  fish: FISH_TYPES[];
  dayTimeType: FISHING_DAY_TIME_TYPES;
  options: LAKE_OPTION_TYPES[];
}>;

export interface LakeSettingsValues
  extends Omit<Lake, 'mainPicture' | 'pictures'> {
  creditCardId: string;
  creditCard: string;
  mainPicture: string | File;
  pictures: Array<string | File>;
  places: LakePlace[];
  options: LakeOption[];
  fishings: Fishing[];
}
