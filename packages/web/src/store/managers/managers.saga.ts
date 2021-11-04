import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getManagersRequest,
  FirebaseServerCollection,
  transformServerListPayload,
} from '../../api';

import { ManagersSlice } from './managers.slice';
import { showErrorNotification } from '../notifications';
import { managersMessages } from './managers.messages';

const {
  GetManagersListError,
  GetManagersListRequest,
  GetManagersListSuccess,
} = ManagersSlice.actions;

export function* getManagersListSaga() {
  try {
    const users: FirebaseServerCollection = yield call(getManagersRequest);
    // @ts-ignore
    yield put(GetManagersListSuccess(transformServerListPayload(users)));
  } catch (error) {
    yield put(GetManagersListError());
    yield put(showErrorNotification(managersMessages.failedToGetUsersList));
  }
}

export const ManagersSagas = [
  takeLatest(GetManagersListRequest.type, getManagersListSaga),
];
