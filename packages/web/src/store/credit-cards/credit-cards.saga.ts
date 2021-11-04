import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreditCard } from '@booklake/core';

import { getCreditCard, manageCreditCard } from '../../api';
import { CreditCardsSlice } from './credit-cards.slice';

const {
  UpdateCreditCardRequest,
  UpdateCreditCardSuccess,
  UpdateCreditCardError,
  GetCreditCardRequest,
  GetCreditCardSuccess,
  GetCreditCardError,
} = CreditCardsSlice.actions;

export function* manageCreditCardSaga(action: PayloadAction<CreditCard>) {
  try {
    yield call(manageCreditCard, action.payload);
    yield put(UpdateCreditCardSuccess());
  } catch (error) {
    yield put(UpdateCreditCardError());
  }
}

export function* getCreditCardSaga(action: PayloadAction<string>) {
  try {
    const creditCard: CreditCard = yield call(getCreditCard, action.payload);
    yield put(GetCreditCardSuccess(creditCard));
  } catch (error) {
    yield put(GetCreditCardError());
  }
}

export const CreditCardsSagas = [
  takeEvery(UpdateCreditCardRequest.type, manageCreditCardSaga),
  takeLatest(GetCreditCardRequest.type, getCreditCardSaga),
];
