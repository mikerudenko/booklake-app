import { RouterState } from 'connected-react-router';

import { NotificationsState } from './notifications';
import { ManagersState } from './managers';
import { AuthState } from './auth';
import { FeaturesState } from './features';
import { ModalState } from './modal';
import { LOCALE } from '@booklake/core/dist/i18n';

export interface BookLakeState {
  router: RouterState;
  notifications: NotificationsState;
  i18n: LOCALE;
  auth: AuthState;
  users: ManagersState;
  features: FeaturesState;
  modal: ModalState;
}
