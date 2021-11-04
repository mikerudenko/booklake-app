import { createSelector } from 'reselect';
import { USER_ROLES } from '@booklake/core';

import { AuthSlice } from './auth.slice';
import { createFeatureSelector } from '../../store-utils';

export const selectAuthFeature = createFeatureSelector<any>(AuthSlice.name);

export const selectCurrentUser = createSelector(
  selectAuthFeature,
  ({ user }) => user,
);

export const selectCurrentUserRole = createSelector(
  selectAuthFeature,
  ({ role }) => role as USER_ROLES,
);
