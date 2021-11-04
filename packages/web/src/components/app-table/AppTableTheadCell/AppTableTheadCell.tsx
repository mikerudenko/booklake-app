import TableCell from '@material-ui/core/TableCell';
import classNames from 'classnames';
import React, { memo, useCallback } from 'react';

import { AppTableColumn, SORT_ORDER, SortConfig } from '../AppTable.types';
// import { useCustomTableContext } from "../customTableContext";

interface AppTableTheadCellProps extends SortConfig {
  column: AppTableColumn;
  onSort(dataField: string): void;
}

export const AppTableTheadCell = memo(
  ({
    column: { dataField, label, sort, minWidth, align, headerClasses },
    onSort,
    sortOrder,
    sortField,
  }: AppTableTheadCellProps) => {
    // const { onTableChange } = useCustomTableContext();
    const onHeaderCellClick = useCallback(() => {
      if (sort) {
        onSort(dataField);
        // onTableChange(TABLE_ACTION_TYPES.sort, {
        //   sortField: dataField,
        //   sortOrder:
        //     sortOrder === SORT_ORDER.desc ? SORT_ORDER.asc : SORT_ORDER.desc,
        // });
      }
    }, [sort, onSort, dataField]);

    const renderSortCaret = useCallback(() => {
      const caretClassName = classNames('caret cs-sort-caret', {
        'cs-sort-caret--reverse': sortOrder === SORT_ORDER.desc,
        'cs-sort-caret--show': dataField === sortField,
      });

      return (
        <span className='cs-table__sort-caret'>
          <span className={caretClassName} />
        </span>
      );
    }, [dataField, sortField, sortOrder]);

    const style = { minWidth };

    return (
      <TableCell
        key={dataField}
        {...{
          style,
          align,
        }}
        className={headerClasses}
        onClick={onHeaderCellClick}
      >
        {label}
        {renderSortCaret()}
      </TableCell>
    );
  },
);
