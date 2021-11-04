import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { memo, MouseEvent, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../app.constants';
import { globalMessages } from '../../../../store/i18n';
import { AppLink } from '../../../app-link';
import { useAppHeaderLogic } from '../use-app-header-logic';
import { useHeaderRightSectionStyles } from './use-header-right-section-styles';

export const HeaderRightSection = memo(() => {
  const { photoURL, user, onSignOutClick } = useAppHeaderLogic();
  const { formatMessage } = useIntl();
  const classes = useHeaderRightSectionStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openProfileMenu = useCallback((event: MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closeProfileMenu = () => {
    setAnchorEl(null);
  };

  const renderUserInfo = useCallback(
    () => (
      <>
        <Avatar
          src={photoURL}
          className={classes.avatar}
          onClick={openProfileMenu}
        />
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={closeProfileMenu}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Link
            to={`${ROUTES.profile}${ROUTES.settings}`}
            className={classes.profileItem}
          >
            <MenuItem>{formatMessage(globalMessages.profileSettings)}</MenuItem>
          </Link>

          <MenuItem onClick={onSignOutClick}>
            {formatMessage(globalMessages.signOut)}
          </MenuItem>
        </Menu>
      </>
    ),
    [
      photoURL,
      classes.avatar,
      classes.profileItem,
      onSignOutClick,
      openProfileMenu,
      anchorEl,
      formatMessage,
    ],
  );

  const renderSignInLink = useCallback(
    () => (
      <AppLink
        className={classes.authLink}
        variant='subtitle1'
        to={ROUTES.signIn}
        text={globalMessages.signIn}
      />
    ),
    [classes.authLink],
  );

  return (
    <div className={classes.rightContent}>
      {user ? renderUserInfo() : renderSignInLink()}
    </div>
  );
});
