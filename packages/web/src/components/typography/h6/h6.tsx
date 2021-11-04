import Typography from '@material-ui/core/Typography';
import React, { memo, ReactNode } from 'react';

export type H6Props = {
  children: ReactNode;
  className?: string;
};

//! font-size = 20px

export const H6 = memo(({ children, className }: H6Props) => {
  return (
    <Typography variant='h6' className={className}>
      {children}
    </Typography>
  );
});
