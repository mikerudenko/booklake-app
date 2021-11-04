import { useCallback } from 'react';
import queryString from 'query-string';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { useLakesConnect } from '../../../../store/lakes';
import { ROUTES } from '../../../../app.constants';
import { useBooleanState } from '../../../../hooks/use-boolean-state';

export const useHeaderAsideLogic = () => {
  const [sidebarOpened, openSideBar, closeSidebar] = useBooleanState(false);
  const { SetLakeFilters, lakeFilters } = useLakesConnect();
  const dispatch = useDispatch();

  // TODO move to helper function
  const goToSearchPage = useCallback(
    filters => {
      const payload = { ...lakeFilters, ...filters };
      const params = queryString.stringify(payload, { arrayFormat: 'index' });
      dispatch(push(ROUTES.search + '?' + params));
    },
    [dispatch, lakeFilters],
  );

  const onDatePickerChange = useCallback(
    date => {
      const newFilters = { ...lakeFilters, date: date.toISOString() };
      SetLakeFilters(newFilters);
      goToSearchPage(newFilters);
    },
    [SetLakeFilters, goToSearchPage, lakeFilters],
  );

  const toggleAside = useCallback(() => {
    sidebarOpened ? closeSidebar() : openSideBar();
  }, [closeSidebar, openSideBar, sidebarOpened]);

  return {
    sidebarOpened,
    toggleAside,
    closeSidebar,
    date: lakeFilters.date,
    onDatePickerChange,
  };
};
