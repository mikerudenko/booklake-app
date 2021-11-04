import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import type { ReactNode } from 'react';

export type H3Props = {
  children: ReactNode;
};

//! font-size = 48px

export const H3 = memo(({ children }: H3Props) => {
  return <Typography variant='h3'>{children}</Typography>;
});
