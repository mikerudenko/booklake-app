import React, { memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useAppLoaderStyles } from './use-app-loader-styles';

export const AppLoader = memo(() => {
  const classes = useAppLoaderStyles();
  return (
    <div className={classes.wrapper}>
      <CircularProgress className={classes.progress} />
    </div>
  );
});
