import { defineMessages } from 'react-intl';

export const authMessages = defineMessages({
  wrongPassword: {
    id: 'auth.send-reset-link',
    defaultMessage: 'Password is incorrect, please try again.',
  },
  signUpSuccessful: {
    id: 'auth.sign-up-successful',
    defaultMessage: 'Sign up successfully',
  },
  signOutSuccessfully: {
    id: 'auth.sign-out-successful',
    defaultMessage: 'Sign out successfully',
  },
  signInSuccessful: {
    id: 'auth.sign-in-successful',
    defaultMessage: 'Sign in successfull',
  },
  userNotFound: {
    id: 'auth.user-not-found',
    defaultMessage: 'User not found.',
  },
  linkToResetSent: {
    id: 'auth.link-to-reset-was-sent',
    defaultMessage:
      'Link to reset password was sent to your email. Please, check it.',
  },
  profileSettingsUpdated: {
    id: 'users.profile-settings-updated',
    defaultMessage: 'Profile settings updated successfully',
  },
});
