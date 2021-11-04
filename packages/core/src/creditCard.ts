import { CURRENCY } from './app';

export interface CreditCard {
  id: string;
  creditCard: string;
  currency: CURRENCY;
  managerId: string;
}
