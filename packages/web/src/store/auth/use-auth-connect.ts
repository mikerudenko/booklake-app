import { useSelector } from 'react-redux';

import { AuthSlice } from './auth.slice';
import { selectCurrentUser, selectCurrentUserRole } from './auth.selectors';
import { useActions } from '../../hooks';

export const useAuthConnect = () => {
  const user = useSelector(selectCurrentUser);
  const role = useSelector(selectCurrentUserRole);

  return {
    ...useActions(AuthSlice.actions),
    role,
    user,
  };
};
