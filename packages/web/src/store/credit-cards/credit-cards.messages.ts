import { defineMessages } from 'react-intl';
import { MessageDescriptor } from 'react-intl';

export const creditCardsMessages: Record<
  string,
  MessageDescriptor
> = defineMessages({
  creditCardAdded: {
    id: 'store.credit-cards.added',
    defaultMessage: 'Credit card was successfully added',
  },
  creditCardAddError: {
    id: 'store.credit-cards.add-error',
    defaultMessage: 'There is an error, can not add credit card',
  },
});
