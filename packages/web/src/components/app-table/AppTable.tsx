import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import React, { memo } from 'react';

import { AppTableColumn, SortConfig } from './AppTable.types';
import { AppTablePagination } from './AppTablePagination';
import { AppTableTbody } from './AppTableTbody';
import { AppTableThead } from './AppTableThead';
import { AppTableContext } from './customTableContext';
import { useAppTableStyles } from './useAppTableStyles';
import { useCustomTableSort } from './useCustomTableSort';

interface AppTableProps {
  columns: AppTableColumn[];
  keyField: string;
  data: any[];
  loading: boolean;
  defaultSorted?: SortConfig;
  isFilterActive?: boolean;
  onTableChange?(): void;
}

export const AppTable = memo(
  ({
    columns,
    keyField,
    data,
    loading,
    defaultSorted,
    onTableChange,
    isFilterActive,
  }: AppTableProps) => {
    const { sortOrder, sortField, setSorting } = useCustomTableSort(
      defaultSorted,
    );
    const classes = useAppTableStyles();

    return (
      <AppTableContext.Provider value={{ sortOrder, sortField, onTableChange }}>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table stickyHeader>
              <AppTableThead
                {...{
                  columns,
                  sortField,
                  sortOrder,
                }}
                onSort={setSorting}
              />
              <AppTableTbody
                {...{
                  keyField,
                  loading,
                  columns,
                  isFilterActive,
                  data,
                }}
              />
            </Table>
          </div>
          <AppTablePagination />
        </Paper>
      </AppTableContext.Provider>
    );
  },
);
