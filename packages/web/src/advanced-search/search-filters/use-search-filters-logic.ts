import { useCallback, useEffect } from 'react';

import { useLakesConnect, LakeListFilters } from '../../store/lakes';
import { META_THUNK } from '../../app.constants';

export const useSearchFiltersLogic = () => {
  const { GetLakeListRequest, SetLakeFilters, lakeFilters } = useLakesConnect();

  const applyFilters = useCallback(
    async (filters: LakeListFilters) => {
      SetLakeFilters(filters);
      return GetLakeListRequest(filters, META_THUNK);
    },
    [GetLakeListRequest, SetLakeFilters],
  );

  useEffect(() => {
    GetLakeListRequest(lakeFilters, META_THUNK);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    lakeFilters,
    applyFilters,
  };
};
