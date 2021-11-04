import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import type { ReactNode } from 'react';

export type H2Props = {
  children: ReactNode;
};

//! font-size = 60px

export const H2 = memo(({ children }: H2Props) => {
  return <Typography variant='h2'>{children}</Typography>;
});
