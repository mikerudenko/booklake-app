import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lake, LakePlace, Fishing, BookedPlacesPerDay } from '@booklake/core';

import { getInitialLakeFilters } from './lakes.helpers';
import {
  GetLakeByIdPlacesPayload,
  GetLakeByIdFishingsPayload,
  LakeListFilters,
  LakeSettingsValues,
  GetBookedPlacesDaySuccessPayload,
  GetBookedPlacesRequestPayload,
} from './lakes.types';
import {
  NetworkStatus,
  prepareAction,
  transformListToMap,
} from '../../store-utils';

export const LakesSlice = createSlice({
  name: 'lakes',
  initialState: {
    lakes: {
      data: {} as Record<string, Lake>,
      networkStatus: NetworkStatus.None,
    },
    lakePlaces: {
      data: {} as Record<string, LakePlace[]>,
      networkStatus: NetworkStatus.None,
    },
    lakeFishings: {
      data: {} as Record<string, Fishing[]>,
      networkStatus: NetworkStatus.None,
    },
    bookedPlaces: {
      data: {} as Record<string, BookedPlacesPerDay>,
      networkStatus: NetworkStatus.None,
    },
    lakeFilters: getInitialLakeFilters() as any,
  },
  reducers: {
    UpdateLakeRequest: {
      prepare: prepareAction,
      reducer: (state, action: PayloadAction<LakeSettingsValues>) => {
        state.lakes.networkStatus = NetworkStatus.Request;
      },
    },
    UpdateLakeSuccess: {
      prepare: prepareAction,
      reducer: (state, action: PayloadAction<Lake>) => {
        state.lakes.networkStatus = NetworkStatus.Success;
        state.lakes.data[action.payload.id] = action.payload;
      },
    },
    UpdateLakeError: {
      prepare: prepareAction,
      reducer: state => {
        state.lakes.networkStatus = NetworkStatus.Error;
      },
    },
    GetLakeByIdRequest: {
      prepare: prepareAction,
      reducer: (state, action: PayloadAction<string>) => {
        state.lakes.networkStatus = NetworkStatus.Request;
      },
    },
    GetLakeByIdError: state => {
      state.lakes.networkStatus = NetworkStatus.Error;
    },
    GetLakeByIdSuccess: (state, action: PayloadAction<Lake>) => {
      state.lakes.networkStatus = NetworkStatus.Success;
      state.lakes.data[action.payload.id] = action.payload;
    },
    GetLakeListRequest: {
      prepare: prepareAction,
      reducer: state => {
        state.lakes.networkStatus = NetworkStatus.Request;
      },
    },
    GetLakeListSuccess: (state, action: PayloadAction<Lake[]>) => {
      state.lakes.networkStatus = NetworkStatus.Success;
      state.lakes.data = transformListToMap(action.payload);
    },
    GetLakeListError: state => {
      state.lakes.networkStatus = NetworkStatus.Error;
    },
    GetLakeByIdPlaceListRequest: (state, action: PayloadAction<string>) => {
      state.lakePlaces.networkStatus = NetworkStatus.Request;
    },
    GetLakeByIdPlaceListSuccess: (
      state,
      action: PayloadAction<GetLakeByIdPlacesPayload>,
    ) => {
      state.lakePlaces.networkStatus = NetworkStatus.Success;
      state.lakePlaces.data[action.payload.lakeId] = action.payload.places;
    },
    GetLakeByIdPlaceListError: state => {
      state.lakePlaces.networkStatus = NetworkStatus.Error;
    },
    GetLakeFishingListRequest: (state, action: PayloadAction<string>) => {
      state.lakeFishings.networkStatus = NetworkStatus.Request;
    },
    GetLakeFishingListSuccess: (
      state,
      action: PayloadAction<GetLakeByIdFishingsPayload>,
    ) => {
      state.lakeFishings.networkStatus = NetworkStatus.Success;
      state.lakeFishings.data[action.payload.lakeId] = action.payload.fishings;
    },
    GetLakeFishingListError: state => {
      state.lakeFishings.networkStatus = NetworkStatus.Error;
    },
    GetLakeBookedPlacesPerDayRequest: (
      state,
      action: PayloadAction<GetBookedPlacesRequestPayload>,
    ) => {
      state.bookedPlaces.networkStatus = NetworkStatus.Request;
    },
    GetLakeBookedPlacesPerDaySuccess: (
      state,
      action: PayloadAction<GetBookedPlacesDaySuccessPayload>,
    ) => {
      const { lakeId, bookedPlaces } = action.payload;
      state.bookedPlaces.networkStatus = NetworkStatus.Success;
      state.bookedPlaces.data[lakeId] = bookedPlaces;
    },
    GetLakeBookedPlacesPerDayError: state => {
      state.bookedPlaces.networkStatus = NetworkStatus.Error;
    },
    SetLakeFilters: (state, action: PayloadAction<LakeListFilters>) => {
      state.lakeFilters = action.payload;
    },
  },
});
