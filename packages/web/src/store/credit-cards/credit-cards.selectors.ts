import { createSelector } from 'reselect';

import { CreditCardsState } from './credit-cards.types';
import { CreditCardsSlice } from './credit-cards.slice';
import { createFeatureSelector } from '../../store-utils';

export const selectCreditCardsFeature = createFeatureSelector<CreditCardsState>(
  CreditCardsSlice.name,
);

export const selectCreditCardStatus = createSelector(
  selectCreditCardsFeature,
  ({ creditCard }) => creditCard.networkStatus,
);

export const selectCreditCard = createSelector(
  selectCreditCardsFeature,
  ({ creditCard }) => creditCard.data,
);
