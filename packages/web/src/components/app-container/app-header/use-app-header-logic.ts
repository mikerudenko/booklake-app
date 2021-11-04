import get from 'lodash/get';
import { useCallback } from 'react';

import { useAuthConnect } from '../../../store/auth/use-auth-connect';
import { META_THUNK } from '../../../app.constants';

export const useAppHeaderLogic = () => {
  const { user, SignOutRequest, role } = useAuthConnect();

  const onSignOutClick = useCallback(() => {
    SignOutRequest(undefined, META_THUNK);
  }, [SignOutRequest]);

  return {
    onSignOutClick,
    role,
    user,
    photoURL: get(user, 'photoURL'),
  };
};
