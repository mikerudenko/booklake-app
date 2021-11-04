import React, { memo } from 'react';

import { useHeaderLeftSectionStyles } from './use-header-left-section-styles';
import { HeaderAside } from '../header-aside';
import { AppLogo } from '../../../app-logo';

export const HeaderLeftSection = memo(() => {
  const classes = useHeaderLeftSectionStyles();

  return (
    <div className={classes.leftHeaderPart}>
      <HeaderAside />
      <AppLogo size='small' wrapperClassName={classes.logo} type='white' />
    </div>
  );
});
