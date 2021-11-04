import Button from '@material-ui/core/Button';
import React, { memo } from 'react';

import { useAppAuthButtonStyles } from './use-app-auth-button-styles';

import FacebookIcon from './assets/facebook-icon.png';
import GoogleIcon from './assets/google-icon.png';

type AppAuthButtonProps = {
  type: 'google' | 'facebook';
  onClick(): void;
};

export const AppAuthButton = memo(({ onClick, type }: AppAuthButtonProps) => {
  const classes = useAppAuthButtonStyles();
  const src = type === 'google' ? GoogleIcon : FacebookIcon;

  return (
    <Button variant='outlined' {...{ onClick }}>
      {type.toUpperCase()}
      <img src={src} alt='auth button' className={classes.socialIcon} />
    </Button>
  );
});
