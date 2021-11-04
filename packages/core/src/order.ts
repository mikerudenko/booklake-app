import { FISHING_DAY_TIME_TYPES } from './lake';

export interface Order {
  id: string;
  date: string;
  places: OrderPlace[];
  dayTimeType: FISHING_DAY_TIME_TYPES;
  status: OrderStatus;
  payType: OrderPayType;
  price: number;
  ticket: null | string;
  buyer: {
    userId: string;
    email: string;
    fullName: string;
    phone: string;
  };
}

export interface OrderPlace {
  id: string;
  options: string[];
  requiredOptions: string[];
}

export enum OrderStatus {
  pending = 'pending',
  approved = 'approved',
  payed = 'payed',
}

export enum OrderPayType {
  cash = 'cash',
  card = 'card',
}
