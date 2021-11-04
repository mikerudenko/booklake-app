import { useEffect } from 'react';

import { SortConfig } from './AppTable.types';

type FetchParams = { onTableChange(sortConfig: SortConfig): void } & SortConfig;

export const useAppTableFetch = ({
  sortField,
  sortOrder,
  onTableChange,
}: FetchParams) => {
  useEffect(() => {
    onTableChange({ sortField, sortOrder });
  }, [sortField, sortOrder, onTableChange]);
};
