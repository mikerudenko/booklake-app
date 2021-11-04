import Skeleton from '@material-ui/lab/Skeleton';
import React, { memo } from 'react';

import { useLakeSceletonStyles } from './use-lake-sceleton-styles';

export const LakesSkeleton = memo(() => {
  const classes = useLakeSceletonStyles();

  return (
    <>
      {[1, 2, 3, 4, 5, 6].map(key => (
        <Skeleton key={key} variant='rect' className={classes.sceletonCard} />
      ))}
    </>
  );
});
