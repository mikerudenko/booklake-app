import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import get from 'lodash/get';
import React, { memo, useCallback } from 'react';

import { AppTableColumn } from '../AppTable.types';

interface AppTableRowProps {
  columns: AppTableColumn[];
  data: any;
}

export const AppTableRow = memo(({ columns, data }: AppTableRowProps) => {
  const renderCell = useCallback(
    ({ dataField, formatter, title, align, className }, index) => {
      const cellValue = get(data, dataField);
      const content = formatter ? formatter(cellValue, data, index) : cellValue;

      return (
        <TableCell
          {...{ className, align }}
          key={dataField}
          title={title ? cellValue : null}
        >
          {content}
        </TableCell>
      );
    },
    [data],
  );

  return (
    <TableRow hover role='checkbox' tabIndex={-1}>
      {columns.map(renderCell)}
    </TableRow>
  );
});
