import { v4 as uuid } from 'uuid';
import { MessageDescriptor } from 'react-intl';

import { NOTIFICATION_TYPE } from './notifications.constants';
import { NotificationsSlice } from './notifications.slice';

const { EnqueueSnackbar } = NotificationsSlice.actions;

export const showErrorNotification = (
  message: string | MessageDescriptor,
  options?: Omit<NotificationOptions, 'variant'>,
) =>
  EnqueueSnackbar({
    key: uuid(),
    message,
    options: {
      ...options,
      variant: NOTIFICATION_TYPE.error,
    },
  });

export const showWarningNotification = (
  message: string | MessageDescriptor,
  options?: Omit<NotificationOptions, 'variant'>,
) =>
  EnqueueSnackbar({
    key: uuid(),
    message,
    options: {
      ...options,
      variant: NOTIFICATION_TYPE.warning,
    },
  });

export const showSuccessNotification = (
  message: string | MessageDescriptor,
  options?: Omit<NotificationOptions, 'variant'>,
) =>
  EnqueueSnackbar({
    key: uuid(),
    message,
    options: {
      ...options,
      variant: NOTIFICATION_TYPE.success,
    },
  });

export const showInfoNotification = (
  message: string | MessageDescriptor,
  options?: Omit<NotificationOptions, 'variant'>,
) =>
  EnqueueSnackbar({
    key: uuid(),
    message,
    options: {
      ...options,
      variant: NOTIFICATION_TYPE.info,
    },
  });
