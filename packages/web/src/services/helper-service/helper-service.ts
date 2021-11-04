import { COUNTRIES, CURRENCY, LakeTranslation, REGIONS } from '@booklake/core';
import { LOCALE } from '@booklake/core/dist/i18n';
import difference from 'lodash/difference';
import {
  COUNTRIES_REGIONS_SELECT_LISTS_MAP,
  CURRENCY_SELECT_LIST,
} from '../../app.constants';

export const isArrayInSubArray = <T>(array: T[], subarray: T[]) =>
  difference(array, subarray).length === 0;

export const selectCurrencyTranslation = (currency: CURRENCY) => {
  console.log(CURRENCY_SELECT_LIST);
  return CURRENCY_SELECT_LIST.find(({ value }) => value === currency);
};

export const selectLakeTranslations = (
  translations: LakeTranslation[],
  locale: LOCALE,
) =>
  translations.find(translation => translation.locale === locale) ||
  translations[0];

export const getRegionMessage = (country: COUNTRIES, region: REGIONS) =>
  (COUNTRIES_REGIONS_SELECT_LISTS_MAP[country].find(
    ({ value }) => value === region,
  ) as Record<string, any>).label;
