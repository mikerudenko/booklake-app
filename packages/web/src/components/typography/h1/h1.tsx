import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import type { ReactNode } from 'react';

export type H1Props = {
  children: ReactNode;
};

//! font-size = 96px

export const H1 = memo(({ children }: H1Props) => {
  return <Typography variant='h1'>{children}</Typography>;
});
