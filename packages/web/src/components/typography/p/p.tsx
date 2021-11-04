import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import type { ReactNode } from 'react';

export type PProps = {
  children: ReactNode;
};

//! font-size = 16px

export const P = memo(({ children }: PProps) => {
  return <Typography variant='subtitle1'>{children}</Typography>;
});
