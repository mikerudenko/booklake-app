import { useSelector } from 'react-redux';

import { FeaturesSlice } from './features.slice';
import {
  selectFeatures,
  selectFeaturesNetworkStatus,
  selectOnlineStatus,
} from './features.selectors';
import { useActions } from '../../hooks';

export const useFeaturesConnect = () => {
  const featuresNetworkStatus = useSelector(selectFeaturesNetworkStatus);
  const features = useSelector(selectFeatures);
  const onlineStatus = useSelector(selectOnlineStatus);

  const actions = useActions(FeaturesSlice.actions);

  return {
    ...actions,
    featuresNetworkStatus,
    features,
    onlineStatus,
  };
};
