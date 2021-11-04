import enLocale from 'date-fns/locale/en-US';
import uaLocale from 'date-fns/locale/uk';
import ruLocale from 'date-fns/locale/ru';

import enMessages from './translations/en.json';
import ruMessages from './translations/ru.json';
import uaMessages from './translations/ua.json';

import { globalMessages } from './i18n.messages';
import { LOCALE } from '@booklake/core/dist/i18n';

export const LOCALE_SELECT_LIST = [
  {
    value: LOCALE.En,
    label: globalMessages.englishLanguage,
  },
  {
    value: LOCALE.Ua,
    label: globalMessages.ukrainianLanguage,
  },
  {
    value: LOCALE.Ru,
    label: globalMessages.russianLanguage,
  },
];

export type TranslationMessages = Record<string, string>;

export const translationDictionary = {
  [LOCALE.En]: prepareMessages(enMessages),
  [LOCALE.Ua]: prepareMessages(uaMessages),
  [LOCALE.Ru]: prepareMessages(ruMessages),
};

export const dateLocales = {
  [LOCALE.En]: enLocale,
  [LOCALE.Ua]: uaLocale,
  [LOCALE.Ru]: ruLocale,
};

function prepareMessages(
  messages: TranslationMessages,
  fallbackMessages: TranslationMessages = enMessages,
): TranslationMessages {
  return {
    ...fallbackMessages,
    ...messages,
  };
}
