import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  NotificationPayload,
  CloseSnackbarPayload,
} from './notifications.types';

export const NotificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [] as NotificationPayload[],
  },
  reducers: {
    EnqueueSnackbar: (state, action: PayloadAction<NotificationPayload>) => {
      state.notifications.push(action.payload);
    },
    CloseSnackbar: (state, action: PayloadAction<CloseSnackbarPayload>) => {
      state.notifications = state.notifications.map(notification =>
        action.payload.dismissAll || notification.key === action.payload.key
          ? { ...notification, dismissed: true }
          : { ...notification },
      );
    },
    RemoveSnackbar: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        notification => notification.key !== action.payload,
      );
    },
  },
});
