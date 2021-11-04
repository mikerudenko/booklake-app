import { createSelector } from 'reselect';

import { OrdersSlice } from './orders.slice';
import { OrdersState } from './orders.types';
import { createFeatureSelector } from '../../store-utils';

export const selectOrdersFeature = createFeatureSelector<OrdersState>(
  OrdersSlice.name,
);

export const selectOrderList = createSelector(
  selectOrdersFeature,
  ({ orders: { data } }) => data,
);

export const selectOrdersNetworkStatus = createSelector(
  selectOrdersFeature,
  ({ orders: { networkStatus } }) => networkStatus,
);
