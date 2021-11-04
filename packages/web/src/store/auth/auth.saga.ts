import { push } from 'connected-react-router';
import get from 'lodash/get';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  ProviderPayload,
  CredentialsPayload,
  UpdateUserPayload,
} from '@booklake/core';

import {
  getUserRole,
  sendPasswordResetEmail,
  setLocale,
  setLocalPersistence,
  signInWithCredentials,
  signInWithProvider,
  signOut,
  signUpWithCredentials,
} from '../../api/api.auth';
import { ROUTES } from '../../app.constants';
import { selectCurrentLocaleSlice } from '../i18n';
import {
  showErrorNotification,
  showSuccessNotification,
} from '../notifications';
import { AuthSlice } from './auth.slice';

import { AUTH_ERROR_NOTIFICATIONS } from './auth.constants';
import { authMessages } from './auth.messages';
import { ResetPasswordPayload } from './auth.types';
import { updateUserAvatar, updateUserRequest } from '../../api';
import { MetaThunk } from '../../app.types';

const {
  AuthRequest,
  AuthSuccess,
  AuthError,
  ResetPasswordError,
  ResetPasswordLinkSend,
  ResetPasswordRequest,
  SignOutRequest,
  SignOutSuccess,
  SignOutError,
  UpdateUserSuccess,
  UpdateUserError,
} = AuthSlice.actions;

const AuthStrategy: any = {
  'sign-in': (payload: CredentialsPayload) => signInWithCredentials(payload),
  'sign-up': (payload: CredentialsPayload) => signUpWithCredentials(payload),
  provider: (payload: ProviderPayload) => signInWithProvider(payload),
};

export function* authSaga(
  action: PayloadAction<CredentialsPayload | ProviderPayload, string, any>,
) {
  const { payload, meta } = action;
  try {
    const { user } = yield call(AuthStrategy[meta.strategy], payload);
    const role = yield call(getUserRole, user);
    yield put(AuthSuccess({ user, role }, meta));
    yield put(push(ROUTES.profile));
    yield put(showSuccessNotification(authMessages.signInSuccessful));
    yield call(setLocalPersistence);
  } catch (error) {
    const { code, message } = error;
    yield put(AuthError(error, meta, true));
    yield put(
      showErrorNotification(get(AUTH_ERROR_NOTIFICATIONS, code, message)),
    );
  }
}

export function* resetPasswordSaga(
  action: PayloadAction<ResetPasswordPayload, string, MetaThunk>,
) {
  const {
    payload: { email },
    meta,
  } = action;

  try {
    yield call(sendPasswordResetEmail, email);
    const locale = yield select(selectCurrentLocaleSlice);
    yield call(setLocale, locale);
    yield put(ResetPasswordLinkSend(meta));
    yield put(showSuccessNotification(authMessages.linkToResetSent));
  } catch (error) {
    const { code, message } = error;
    yield put(ResetPasswordError(null, meta, true));
    yield put(
      showErrorNotification(get(AUTH_ERROR_NOTIFICATIONS, code, message)),
    );
  }
}

export function* signOutSaga(action: PayloadAction<void, string, MetaThunk>) {
  const { meta } = action;
  try {
    yield call(signOut);
    yield put(SignOutSuccess(null, meta));
    yield put(showSuccessNotification(authMessages.signOutSuccessfully));
    yield put(push(ROUTES.dashboard));
  } catch (error) {
    const { message } = error;
    yield put(SignOutError(null, meta, true));
    yield put(showErrorNotification(message));
  }
}

export function* updateUser(
  action: PayloadAction<UpdateUserPayload, string, MetaThunk>,
) {
  let { meta, payload } = action;

  try {
    if ((payload as any).photoURL instanceof File) {
      // @ts-ignore
      payload.photoURL = yield call(updateUserAvatar, payload.photoURL);
    }

    const { data } = yield call(updateUserRequest, payload);
    yield put(UpdateUserSuccess(data, meta));
    yield put(showSuccessNotification(authMessages.profileSettingsUpdated));
  } catch (error) {
    const { message } = error;
    yield put(UpdateUserError(error, meta, true));
    yield put(showErrorNotification(message));
  }
}

export const AuthSagas = [
  takeEvery(AuthRequest.type, authSaga),
  takeEvery(ResetPasswordRequest.type, resetPasswordSaga),
  takeEvery(SignOutRequest.type, signOutSaga),
];
