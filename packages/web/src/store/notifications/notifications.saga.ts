import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';

import { NOTIFICATION_CLOSE_DURATION } from './notifications.constants';
import { NotificationPayload } from './notifications.types';
import { NotificationsSlice } from './notifications.slice';

const { CloseSnackbar, EnqueueSnackbar } = NotificationsSlice.actions;

export function* showNotificationSaga(
  action: PayloadAction<NotificationPayload>,
) {
  const {
    payload: { key },
  } = action;
  yield delay(NOTIFICATION_CLOSE_DURATION);
  yield put(CloseSnackbar({ key }));
}

export const NotificationsSagas = [
  takeEvery(EnqueueSnackbar.type, showNotificationSaga),
];
