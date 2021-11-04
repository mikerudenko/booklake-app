import React, { memo } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

import { useAppRemoveButtonStyles } from './use-app-remove-button-styles';

type AppRemoveButtonProps = {
  onClick(): void;
};

export const AppRemoveButton = memo(({ onClick }: AppRemoveButtonProps) => {
  const classes = useAppRemoveButtonStyles();
  return (
    <IconButton aria-label='delete' onClick={onClick}>
      <ClearIcon className={classes.icon} />
    </IconButton>
  );
});
