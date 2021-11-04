import React, { memo } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';

import { useAppAddButtonStyles } from './use-app-add-button-styles';

type AppAddButtonProps = {
  onClick(): void;
};

export const AppAddButton = memo(({ onClick }: AppAddButtonProps) => {
  const classes = useAppAddButtonStyles();
  return (
    <IconButton aria-label='add' onClick={onClick}>
      <AddCircleOutlineIcon className={classes.icon} />
    </IconButton>
  );
});
