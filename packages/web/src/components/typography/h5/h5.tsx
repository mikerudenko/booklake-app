import Typography from '@material-ui/core/Typography';
import React, { memo, ReactNode } from 'react';

export type H5Props = {
  children: ReactNode;
  className?: string;
};

//! font-size = 24px

export const H5 = memo(({ children, className }: H5Props) => {
  return (
    <Typography variant='h5' className={className}>
      {children}
    </Typography>
  );
});
