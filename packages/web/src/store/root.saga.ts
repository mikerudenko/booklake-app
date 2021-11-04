import { all } from 'redux-saga/effects';

import { NotificationsSagas } from './notifications';
import { AuthSagas } from './auth';
import { ManagersSagas } from './managers';
import { LakesSagas } from './lakes';
import { CreditCardsSagas } from './credit-cards';
import { FeaturesSagas } from './features';
import { OrdersSagas } from './orders';

export function* rootSaga() {
  yield all([
    ...ManagersSagas,
    ...AuthSagas,
    ...NotificationsSagas,
    ...LakesSagas,
    ...CreditCardsSagas,
    ...FeaturesSagas,
    ...OrdersSagas,
  ]);
}
