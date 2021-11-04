import React, { memo } from 'react';
import TablePagination from '@material-ui/core/TablePagination';

import { useAppTablePagination } from './useAppTablePagination';

interface AppTablePaginationProps {
  count?: number;
}

const rowsPerPageValues = [10, 25, 100];

export const AppTablePagination = memo(
  ({ count = 1000 }: AppTablePaginationProps) => {
    const {
      onChangePage,
      onChangeRowsPerPage,
      rowsPerPage,
      page,
    } = useAppTablePagination();

    return (
      <TablePagination
        rowsPerPageOptions={rowsPerPageValues}
        component='div'
        {...{
          count,
          rowsPerPage,
          page,
          onChangePage,
          onChangeRowsPerPage,
        }}
      />
    );
  },
);
