import { WithNetworkStatus } from '../../store-utils';

export interface OrdersState {
  orders: WithNetworkStatus<Record<string, any>>;
}
