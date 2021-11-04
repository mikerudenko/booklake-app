import React, { Children } from 'react';
import { IntlProvider } from 'react-intl';

import { useI18nConnect } from '../store/i18n';

type TranslationProviderProps = {
  children: import('react').ReactNode;
};

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const { locale, messages } = useI18nConnect();

  return (
    <IntlProvider key={locale} {...{ messages, locale }}>
      {Children.only(children)}
    </IntlProvider>
  );
};
