import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import type { ReactNode } from 'react';

export type H4Props = {
  children: ReactNode;
};

//! font-size = 34px

export const H4 = memo(({ children }: H4Props) => {
  return <Typography variant='h4'>{children}</Typography>;
});
