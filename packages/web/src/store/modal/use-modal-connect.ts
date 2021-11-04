import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { ModalSlice } from './modal.slice';
import { constructSelectModalStatus } from './modal.selectors';
import { useActions } from '../../hooks';

export const useModalConnect = (id: string) => {
  const modalStatus = useSelector(constructSelectModalStatus(id));

  const actions = useActions(ModalSlice.actions);

  return useMemo(
    () => ({
      ...actions,
      modalStatus,
    }),
    [actions, modalStatus],
  );
};
