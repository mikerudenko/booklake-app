import React, { memo } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import ColoredLogo from './logo.svg';
import WhiteLogo from './logo-white.svg';
import { useAppLogoStyles } from './use-app-logo-styles';
import { ROUTES } from '../../app.constants';

type AppLogoProps = {
  size: 'default' | 'small';
  type: 'colored' | 'white';
  className?: string;
  wrapperClassName?: string;
};

export const AppLogo = memo(
  ({
    size = 'default',
    className,
    type = 'colored',
    wrapperClassName,
  }: AppLogoProps) => {
    const classes = useAppLogoStyles();
    const sizeClass = size === 'default' ? classes.default : classes.small;
    return (
      <Link className={wrapperClassName} to={ROUTES.dashboard}>
        <img
          src={type === 'colored' ? ColoredLogo : WhiteLogo}
          alt='Logo'
          className={classnames(sizeClass, className)}
        />
      </Link>
    );
  },
);
