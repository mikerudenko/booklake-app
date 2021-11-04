import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { memo } from 'react';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

import { HeaderFilters } from './header-filters';
import { HeaderLeftSection } from './header-left-section';
import { HeaderRightSection } from './header-right-section';
import { useAppHeaderStyles } from './use-app-header-styles';

const showFilters = (pathname: string) =>
  pathname === '/' ||
  ['/lakes', '/profile'].some(item => pathname.includes(item));

export const AppHeader = memo(() => {
  const classes = useAppHeaderStyles();
  const { pathname } = useLocation();

  return (
    <AppBar position='static' className={classes.root}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <HeaderLeftSection />
          {showFilters(pathname) && (
            <Hidden smDown>
              <HeaderFilters />
            </Hidden>
          )}
          <HeaderRightSection />
        </Toolbar>
      </Container>
    </AppBar>
  );
});
