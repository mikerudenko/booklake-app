import { CURRENCY, COUNTRIES, REGIONS } from '@booklake/core';
import { globalMessages } from './store/i18n';

export enum ROUTES {
  // Auth routes
  signIn = '/sign-in',
  signUp = '/sign-up',
  forgotPassword = '/forgot-password',

  // User profile routers
  profile = '/profile',
  settings = '/settings',

  createLake = '/create-lake',
  lakes = '/lakes',
  notFound = '/not-found',
  orders = '/orders',
  search = '/search',
  orderDetails = '/order-details',
  placesSelection = '/places-selection',

  // Information routes
  meetBookLake = '/meet-booklake',
  faq = '/faq',
  payment = '/payment',
  partners = '/partners',
  dashboard = '/',
}

export const FLEX_CENTER_BETWEEN = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const FLEX_CENTER_START = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export const CURRENCY_SELECT_LIST = [
  {
    value: CURRENCY.uah,
    label: globalMessages.uah,
  },
];

export const COUNTRIES_SELECT_LIST = [
  {
    value: COUNTRIES.Ukraine,
    label: globalMessages.Ukraine,
  },
];

export const COUNTRIES_REGIONS_SELECT_LISTS_MAP = {
  [COUNTRIES.Ukraine]: [
    {
      label: globalMessages.KievRegion,
      value: REGIONS.KievRegion,
    },
  ],
};

export const META_THUNK = {
  thunk: true,
};

export const AppTheme = {
  palette: {
    primary: {
      main: '#2690A8',
    },
    secondary: {
      main: '#FF6927',
    },
  },
};
