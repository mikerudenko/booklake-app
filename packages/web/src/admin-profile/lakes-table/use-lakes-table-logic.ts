import { useEffect } from 'react';

import { useLakesConnect } from '../../store/lakes';

export const useLakesTableLogic = () => {
  const { lakes, lakesNetworkStatus } = useLakesConnect();

  useEffect(() => {
    // GetLakeListRequest({}, META_THUNK);
  }, []);

  return {
    lakes: Object.values(lakes),
    lakesNetworkStatus,
  };
};
