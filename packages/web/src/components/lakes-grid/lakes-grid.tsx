import React, { memo } from 'react';
import { Lake } from '@booklake/core';

import { useLakesGridStyles } from './use-lakes-grid-styles';
import { LakeGridItem } from './lake-grid-item';
import { LakesSkeleton } from './lakes-skeleton';
import { NetworkStatus } from '../../store-utils';

interface LakesGridProps {
  lakes: Lake[];
  lakesNetworkStatus: NetworkStatus;
}

export const LakesGrid = memo(
  ({ lakes, lakesNetworkStatus }: LakesGridProps) => {
    const classes = useLakesGridStyles();

    return (
      <div className={classes.lakesGrid}>
        {lakesNetworkStatus === NetworkStatus.Request ? (
          <LakesSkeleton />
        ) : (
          lakes.map((lake, key) => <LakeGridItem {...{ lake, key }} />)
        )}
      </div>
    );
  },
);
