import { useSelector } from 'react-redux';

import { ManagersSlice } from './managers.slice';
import {
  selectManagersNetworkStatus,
  selectManagers,
} from './managers.selectors';
import { useActions } from '../../hooks';
import { useMemo } from 'react';

export const useManagersConnect = () => {
  const networkStatus = useSelector(selectManagersNetworkStatus);
  const managers = useSelector(selectManagers);
  const actions = useActions(ManagersSlice.actions);

  return useMemo(
    () => ({
      ...actions,
      networkStatus,
      managers,
    }),
    [actions, managers, networkStatus],
  );
};
