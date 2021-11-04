import { User } from '../auth';
import { WithNetworkStatus } from '../../store-utils';

export interface ManagersState {
  managers: WithNetworkStatus<User[]>;
}
