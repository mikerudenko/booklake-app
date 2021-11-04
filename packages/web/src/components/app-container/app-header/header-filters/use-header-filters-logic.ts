import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useCallback } from 'react';
import queryString from 'query-string';
import { FISHING_TYPES } from '@booklake/core';

import { useLakesConnect } from '../../../../store/lakes';
import { ROUTES } from '../../../../app.constants';
import { useBooleanState } from '../../../../hooks';

export const useHeaderFiltersLogic = () => {
  const [isDatePickerOpened, openDatePicker, closeDatePicker] = useBooleanState(
    false,
  );
  const { SetLakeFilters, lakeFilters } = useLakesConnect();
  const dispatch = useDispatch();

  const goToSearchPage = useCallback(
    filters => {
      const payload = { ...lakeFilters, ...filters };
      const params = queryString.stringify(payload, { arrayFormat: 'index' });
      dispatch(push(ROUTES.search + '?' + params));
    },
    [dispatch, lakeFilters],
  );

  const onDateSelected = useCallback(
    date => {
      const newFilters = { ...lakeFilters, date: date.toISOString() };
      SetLakeFilters(newFilters);
      closeDatePicker();
      goToSearchPage(newFilters);
    },
    [SetLakeFilters, closeDatePicker, goToSearchPage, lakeFilters],
  );

  const onLinkClick = useCallback(
    (fishingType: FISHING_TYPES) => () => {
      const newFilters = { fishingType };
      SetLakeFilters(newFilters);
      goToSearchPage(newFilters);
    },
    [SetLakeFilters, goToSearchPage],
  );

  return {
    isDatePickerOpened,
    onDateSelected,
    openDatePicker,
    closeDatePicker,
    lakeFilters,
    onLinkClick,
  };
};
