import React, { memo } from 'react';
import { Lake } from '@booklake/core';

import { useLakesTableLogic } from './use-lakes-table-logic';
import { useLakesTableStyles } from './use-Lakes-table-styles';
import { ROUTES } from '../../app.constants';
import { AppLink } from '../../components/app-link';
import { NetworkStatus } from '../../store-utils';
import { AppTable } from '../../components/app-table';

const columns = [
  {
    dataField: 'translations[0].title',
    label: 'Title',
    formatter: (value: string, { id }: Lake) => (
      <AppLink
        to={`${ROUTES.profile}${ROUTES.lakes}/${id}`}
        variant='body2'
        text={value}
      />
    ),
  },
];

export const LakesTable = memo(() => {
  const { lakes, lakesNetworkStatus } = useLakesTableLogic();
  const classes = useLakesTableStyles();

  return (
    <div className={classes.container}>
      <AppTable
        {...{
          columns,
          keyField: 'id',
          data: lakes,
          loading: lakesNetworkStatus === NetworkStatus.Request,
        }}
      />
    </div>
  );
});
