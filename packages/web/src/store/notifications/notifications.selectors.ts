import { createSelector } from 'reselect';
import { NotificationsState } from './notifications.types';
import { NotificationsSlice } from './notifications.slice';
import { createFeatureSelector } from '../../store-utils';

export const notificationsFeatureSelector = createFeatureSelector<
  NotificationsState
>(NotificationsSlice.name);

export const selectNotifications = createSelector(
  notificationsFeatureSelector,
  ({ notifications }) => notifications,
);
