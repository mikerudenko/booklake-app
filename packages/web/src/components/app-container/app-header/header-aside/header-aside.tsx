import React, { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import c from 'classnames';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import noop from 'lodash/noop';
import Hidden from '@material-ui/core/Hidden';

import { useHeaderAsideStyles } from './use-header-aside-styles';
import { LanguageTaleList } from '../language-tale-list';
import { AppLogo } from '../../../app-logo/app-logo';
import { useIntl } from 'react-intl';
import { globalMessages } from '../../../../store/i18n';
import { ROUTES } from '../../../../app.constants';
import { useHeaderAsideLogic } from './use-header-aside-logic';
import { SocialSection } from '../../../social-section';
import { AppDatePicker } from '../../../controls/app-datepicker';

const sidebarMenuLis = [
  {
    message: globalMessages.profileSettings,
    to: ROUTES.profile + ROUTES.settings,
  },
  {
    message: globalMessages.meetBookLake,
    to: ROUTES.meetBookLake,
  },
  {
    message: globalMessages.faq,
    to: ROUTES.faq,
  },
  {
    message: globalMessages.payment,
    to: ROUTES.payment,
  },
  {
    message: globalMessages.partners,
    to: ROUTES.partners,
  },
];

export const HeaderAside = memo(() => {
  const classes = useHeaderAsideStyles();
  const { formatMessage } = useIntl();
  const {
    sidebarOpened,
    toggleAside,
    closeSidebar,
    date,
    onDatePickerChange,
  } = useHeaderAsideLogic();

  const sidebarContent = useMemo(
    () => (
      <div className={classes.sidebarContent}>
        <div className={classes.topAside}>
          <AppLogo type='white' size='small' className={classes.sidebarLogo} />
          <IconButton
            onClick={closeSidebar}
            aria-label='close'
            className={classes.closeAsideButton}
            size='small'
          >
            <CloseIcon />
          </IconButton>
        </div>
        <LanguageTaleList />
        <Hidden smUp>
          <AppDatePicker
            onChange={onDatePickerChange}
            inputVariant={'outlined' as const}
            variant={'dialog' as const}
            value={date}
            label={globalMessages.date}
            className={classes.formDate}
          />
        </Hidden>

        <div className={classes.sidebarLinks}>
          {sidebarMenuLis.map(({ message, to }, key) => (
            <NavLink
              {...{ to, key }}
              className={classes.sidebarLink}
              activeClassName={classes.activeLink}
            >
              {formatMessage(message)}
            </NavLink>
          ))}
        </div>
        <SocialSection />
      </div>
    ),
    [
      classes.sidebarContent,
      classes.topAside,
      classes.sidebarLogo,
      classes.closeAsideButton,
      classes.formDate,
      classes.sidebarLinks,
      classes.sidebarLink,
      classes.activeLink,
      closeSidebar,
      onDatePickerChange,
      date,
      formatMessage,
    ],
  );

  return (
    <div>
      <div className={classes.asideButton} onClick={toggleAside}>
        <div className={classes.hyphen}></div>
        <div className={c(classes.hyphen, classes.centralHyphen)}></div>
        <div className={classes.hyphen}></div>
      </div>
      <SwipeableDrawer
        open={sidebarOpened}
        onClose={closeSidebar}
        onOpen={noop}
        classes={{ paper: classes.sidebar }}
      >
        {sidebarContent}
      </SwipeableDrawer>
    </div>
  );
});
