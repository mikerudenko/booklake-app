import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NetworkStatus, prepareAction } from '../../store-utils';

type Feature = import('./features.types').Feature;

export const FeaturesSlice = createSlice({
  name: 'features',
  initialState: {
    features: {
      networkStatus: NetworkStatus.None,
      data: [] as Feature[],
    },
    onlineStatus: true,
  },
  reducers: {
    GetFeatureListRequest: {
      prepare: prepareAction,
      reducer: state => {
        state.features.networkStatus = NetworkStatus.Request;
      },
    },
    GetFeatureListSuccess: {
      prepare: prepareAction,
      reducer: (state, action: PayloadAction<Feature[]>) => {
        state.features.data = action.payload;
        state.features.networkStatus = NetworkStatus.Success;
      },
    },
    GetFeatureListError: {
      prepare: prepareAction,
      reducer: state => {
        state.features.networkStatus = NetworkStatus.Error;
      },
    },
    SetOnlineStatus: (state, action: PayloadAction<boolean>) => {
      state.onlineStatus = action.payload;
    },
  },
});
