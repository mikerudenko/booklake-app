import { useCallback, useState } from 'react';

import { SORT_ORDER } from './AppTable.types';

export const useCustomTableSort = (
  defaultSorted = { sortField: '', sortOrder: SORT_ORDER.asc },
) => {
  const [{ sortField, sortOrder }, setSort] = useState(defaultSorted);

  const setSorting = useCallback(
    newSortField => {
      const isSameColumn = sortField === newSortField;
      const newSortOrder = resolveSortOrder(sortOrder, isSameColumn);
      setSort({
        sortField: newSortField,
        sortOrder: newSortOrder,
      });
    },
    [sortField, sortOrder],
  );

  return {
    sortField,
    setSorting,
    sortOrder,
  };
};

export const resolveSortOrder = (
  sortOrder: SORT_ORDER,
  isSameColumn: boolean,
) => {
  if (!isSameColumn) {
    return SORT_ORDER.asc;
  }
  return sortOrder === SORT_ORDER.desc ? SORT_ORDER.asc : SORT_ORDER.desc;
};
