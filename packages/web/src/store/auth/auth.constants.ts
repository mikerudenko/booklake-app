import { authMessages } from './auth.messages';

export const SERVER_ERROR_CODES = {
  userNotFound: 'auth/user-not-found',
  wrongPassword: 'auth/wrong-password',
};

export const AUTH_ERROR_NOTIFICATIONS = {
  [SERVER_ERROR_CODES.userNotFound]: authMessages.userNotFound,
  [SERVER_ERROR_CODES.wrongPassword]: authMessages.wrongPassword,
};
