import { MessageDescriptor } from 'react-intl';
import { OptionsObject } from 'notistack';

export interface NotificationsState {
  notifications: NotificationPayload[];
}

export interface NotificationPayload {
  message: string | MessageDescriptor;
  key: string;
  dismissed?: boolean;
  options: OptionsObject;
}

export interface CloseSnackbarPayload {
  dismissAll?: boolean;
  key: string | number;
}
