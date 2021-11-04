import queryString from 'query-string';

import { DEFAULT_LAKE_FILTERS } from './lakes.constants';
import { FISHING_DAY_TIME_TYPES } from '@booklake/core';

export const getInitialLakeFilters = () => {
  const filtersFromSearch = queryString.parse(window.location.search);

  if (!Object.keys(filtersFromSearch).length) {
    // TODO add Saturday as default selection
    return { ...DEFAULT_LAKE_FILTERS, date: new Date().toISOString() };
  } else {
    return { ...DEFAULT_LAKE_FILTERS, ...filtersFromSearch };
  }
};

export const getEmptyBookedLakePlaces = (date?: string) => {
  return {
    date: date || new Date().toISOString(),
    [FISHING_DAY_TIME_TYPES.allDay]: [],
    [FISHING_DAY_TIME_TYPES.morning]: [],
    [FISHING_DAY_TIME_TYPES.evening]: [],
    [FISHING_DAY_TIME_TYPES.night]: [],
  };
};
