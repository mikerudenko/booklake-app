import { AUTH_PROVIDERS } from '@booklake/core';

import { useI18nConnect } from '../i18n';
import { useAuthConnect } from './use-auth-connect';
import { META_THUNK } from '../../app.constants';

export const useAuthLogic = () => {
  const { AuthRequest } = useAuthConnect();
  const { locale } = useI18nConnect();

  const onAuthClick = (provider: AUTH_PROVIDERS) => () => {
    AuthRequest({ locale, provider }, { ...META_THUNK, strategy: 'provider' });
  };

  return {
    onAuthWithGoogleClick: onAuthClick(AUTH_PROVIDERS.google),
    onAuthWithFacebookClick: onAuthClick(AUTH_PROVIDERS.facebook),
  };
};
