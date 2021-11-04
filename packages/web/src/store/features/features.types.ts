import { WithNetworkStatus } from '../../store-utils';

export interface FeaturesState {
  features: WithNetworkStatus<Feature[]>;
  onlineStatus: boolean;
}

export interface Feature {
  name: string;
  id: string;
  active: boolean;
}
