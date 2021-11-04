import { CreditCard } from '@booklake/core';
import { WithNetworkStatus } from '../../store-utils';

export interface CreditCardsState {
  creditCard: WithNetworkStatus<CreditCard>;
}
