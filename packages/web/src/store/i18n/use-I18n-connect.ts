import { useSelector } from 'react-redux';

import {
  selectCurrentLocale,
  selectMessages,
  selectDateLocale,
} from './i18n.selectors';
import { I18nSlice } from './i18n.slice';
import { useActions } from '../../hooks';

export const useI18nConnect = () => {
  const locale = useSelector(selectCurrentLocale);
  const dateLocale = useSelector(selectDateLocale);
  const messages = useSelector(selectMessages);

  return {
    locale,
    messages,
    dateLocale,
    ...useActions(I18nSlice.actions),
  } as const;
};
