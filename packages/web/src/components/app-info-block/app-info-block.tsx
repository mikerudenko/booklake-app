import React from 'react';
import { Star } from '@material-ui/icons';

import { useAppInfoBlockStyles } from './use-app-Info-block-styles';

type AppInfoBlockProps = {
  children: any;
};

export const AppInfoBlock = ({ children }: AppInfoBlockProps) => {
  const classes = useAppInfoBlockStyles();
  return (
    <div className={classes.block}>
      <Star />
      <div className={classes.description}>{children}</div>
    </div>
  );
};
