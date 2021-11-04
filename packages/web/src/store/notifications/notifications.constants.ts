import { SnackbarOrigin } from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

export const NOTIFICATION_CLOSE_DURATION = 3000;

export const NOTIFICATION_PLACEMENT: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'right',
};

export enum NOTIFICATION_TYPE {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info',
}

export const ICONS = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};
