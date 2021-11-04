import { takeLatest } from 'redux-saga/effects';

import { OrdersSlice } from './orders.slice';

const { CreateOrderRequest } = OrdersSlice.actions;

export function* createOrderSaga() {}

export function* createManagerOrderSaga() {}

export const OrdersSagas = [
  takeLatest(CreateOrderRequest.type, createOrderSaga)
]
