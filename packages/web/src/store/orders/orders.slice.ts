import { Order } from '@booklake/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  NetworkStatus,
  noopAction,
  transformListToMap,
} from '../../store-utils';

export const OrdersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: {
      networkStatus: NetworkStatus.None,
      data: {},
    },
    currentOrder: {} as Order,
    orderTimer: 15000,
  },
  reducers: {
    GetOrderListRequest: state => {
      state.orders.networkStatus = NetworkStatus.Request;
    },
    GetOrderListError: state => {
      state.orders.networkStatus = NetworkStatus.Error;
    },
    GetOrderListSuccess: (state, action: PayloadAction<any>) => {
      state.orders.data = transformListToMap<Order>(action.payload);
      state.orders.networkStatus = NetworkStatus.Success;
    },
    CreateOrderRequest: noopAction,
    CreateOrderSuccess: noopAction,
    CreateOrderError: noopAction,
  },
});
