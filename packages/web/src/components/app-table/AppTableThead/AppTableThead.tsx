import TableRow from '@material-ui/core/TableRow';
import React, { memo, useCallback } from 'react';

import { SORT_ORDER } from '../AppTable.types';
import { AppTableColumn } from '../AppTable.types';
import { AppTableTheadCell } from '../AppTableTheadCell';

interface CustomTableTheadProps {
  columns: AppTableColumn[];
  sortField: string;
  sortOrder: SORT_ORDER;
  onSort(dataField: string): void;
}

export const AppTableThead = memo(
  ({ sortOrder, sortField, onSort, columns }: CustomTableTheadProps) => {
    const renderCell = useCallback(
      (column, index) => (
        <AppTableTheadCell
          key={index}
          {...{
            column,
            sortOrder,
            sortField,
            onSort,
          }}
        />
      ),
      [onSort, sortField, sortOrder],
    );

    return (
      <thead>
        <TableRow>{columns.map(renderCell)}</TableRow>
      </thead>
    );
  },
);
