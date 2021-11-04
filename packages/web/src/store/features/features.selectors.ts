import { createSelector } from 'reselect';

import { FeaturesSlice } from './features.slice';
import { FeaturesState } from './features.types';
import { createFeatureSelector } from '../../store-utils';

export const selectUsersFeature = createFeatureSelector<FeaturesState>(
  FeaturesSlice.name,
);

export const selectFeatures = createSelector(
  selectUsersFeature,
  ({ features }) => features.data,
);

export const selectFeaturesNetworkStatus = createSelector(
  selectUsersFeature,
  ({ features }) => features.networkStatus,
);

export const selectOnlineStatus = createSelector(
  selectUsersFeature,
  ({ onlineStatus }) => onlineStatus,
);
