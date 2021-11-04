import { createSelector } from 'reselect';

import { createFeatureSelector } from '../../store-utils';
import { ManagersSlice } from './managers.slice';
import { ManagersState } from './managers.types';

export const selectUsersFeature = createFeatureSelector<ManagersState>(
  ManagersSlice.name,
);

export const selectManagers = createSelector(
  selectUsersFeature,
  ({ managers: { data } }) => data,
);

export const selectManagersNetworkStatus = createSelector(
  selectUsersFeature,
  ({ managers: { networkStatus } }) => networkStatus,
);
