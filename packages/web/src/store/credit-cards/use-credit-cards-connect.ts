import { useSelector } from 'react-redux';

import { CreditCardsSlice } from './credit-cards.slice';
import {
  selectCreditCardStatus,
  selectCreditCard,
} from './credit-cards.selectors';
import { useActions } from '../../hooks';

export const useCreditCardsConnect = () => {
  const creditCardStatus = useSelector(selectCreditCardStatus);
  const creditCard = useSelector(selectCreditCard);

  return {
    ...useActions(CreditCardsSlice.actions),
    creditCardStatus,
    creditCard,
  };
};
