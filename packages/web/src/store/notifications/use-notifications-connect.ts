import { useSelector } from 'react-redux';

import { NotificationsSlice } from './notifications.slice';
import { selectNotifications } from './notifications.selectors';
import {
  showErrorNotification,
  showWarningNotification,
  showSuccessNotification,
  showInfoNotification,
} from './notifications.utils';
import { useActions } from '../../hooks';

const {
  EnqueueSnackbar,
  CloseSnackbar,
  RemoveSnackbar,
} = NotificationsSlice.actions;

export const useNotificationsConnect = () => {
  const notifications = useSelector(selectNotifications);

  return {
    ...useActions({
      closeSnackbar: CloseSnackbar,
      removeSnackbar: RemoveSnackbar,
      enqueueSnackbar: EnqueueSnackbar,
      showErrorNotification,
      showWarningNotification,
      showSuccessNotification,
      showInfoNotification,
    }),
    notifications,
  };
};
