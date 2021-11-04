import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CURRENCY, CreditCard } from '@booklake/core';

import { CreditCardsState } from './credit-cards.types';
import { NetworkStatus, prepareAction } from '../../store-utils';

const setCreditCardError = (state: CreditCardsState) => {
  state.creditCard.networkStatus = NetworkStatus.Error;
};

const setCreditCardRequestStatus = (state: CreditCardsState) => {
  state.creditCard.networkStatus = NetworkStatus.Request;
};

export const CreditCardsSlice = createSlice({
  name: 'creditCards',
  initialState: {
    creditCard: {
      data: {
        id: '',
        creditCard: '',
        currency: CURRENCY.uah,
        managerId: '',
      },
      networkStatus: NetworkStatus.None,
    },
  },
  reducers: {
    GetCreditCardRequest: {
      prepare: prepareAction,
      reducer: setCreditCardRequestStatus,
    },
    GetCreditCardSuccess: (state, action: PayloadAction<CreditCard>) => {
      state.creditCard.networkStatus = NetworkStatus.Success;
      state.creditCard.data = action.payload;
    },
    GetCreditCardError: setCreditCardError,
    UpdateCreditCardRequest: {
      prepare: prepareAction,
      reducer: setCreditCardRequestStatus,
    },
    UpdateCreditCardSuccess: state => {
      state.creditCard.networkStatus = NetworkStatus.Success;
    },
    UpdateCreditCardError: setCreditCardError,
  },
});
