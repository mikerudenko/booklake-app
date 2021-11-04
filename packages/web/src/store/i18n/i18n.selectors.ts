import { createSelector } from 'reselect';

import { translationDictionary, dateLocales } from './i18n.constants';
import { I18nSlice, LocateState } from './i18n.slice';
import { createFeatureSelector } from '../../store-utils';

export const selectCurrentLocaleSlice = createFeatureSelector<LocateState>(
  I18nSlice.name,
);

export const selectCurrentLocale = createSelector(
  selectCurrentLocaleSlice,
  ({ locale }) => locale,
);

export const selectDateLocale = createSelector(
  selectCurrentLocale,
  locale => dateLocales[locale],
);

export const selectMessages = createSelector(
  selectCurrentLocale,
  locale => translationDictionary[locale],
);
