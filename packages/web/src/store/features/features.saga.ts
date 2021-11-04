import { call, put, takeLatest, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';

import {
  getFeaturesRequest,
  FirebaseServerCollection,
  transformServerListPayload,
} from '../../api';

import { FeaturesSlice } from './features.slice';
import { MetaThunk } from '../../app.types';

const {
  GetFeatureListRequest,
  GetFeatureListSuccess,
  GetFeatureListError,
  SetOnlineStatus,
} = FeaturesSlice.actions;

export function* getFeatureListSaga(
  action: PayloadAction<void, string, MetaThunk>,
) {
  const { meta } = action;
  try {
    const users: FirebaseServerCollection = yield call(getFeaturesRequest);
    yield put(GetFeatureListSuccess(transformServerListPayload(users), meta));
  } catch (error) {
    yield put(GetFeatureListError(meta));
  }
}

function offlineChannel() {
  return eventChannel(emitter => {
    const updateOnlineStatus = () => emitter(navigator.onLine);

    window.addEventListener('offline', updateOnlineStatus);
    window.addEventListener('online', updateOnlineStatus);
    return () => {
      emitter(END);
      window.removeEventListener('offline', updateOnlineStatus);
      window.removeEventListener('online', updateOnlineStatus);
    };
  });
}

export function* offlineDetectionSaga() {
  const channel = yield call(offlineChannel);
  try {
    while (true) {
      const isOnline = yield take(channel);
      yield put(SetOnlineStatus(isOnline));
    }
  } catch {}
}

export const FeaturesSagas = [
  takeLatest(GetFeatureListRequest.type, getFeatureListSaga),
  offlineDetectionSaga(),
];
