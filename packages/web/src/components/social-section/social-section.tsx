import React, { memo } from 'react';

import { IconTelegram } from './icon-telegram';
import { IconFacebook } from './icon-facebook';
import { IconInstagram } from './icon-instagram';
import { useSocialSectionStyles } from './use-social-section-styles';

export const SocialSection = memo(() => {
  const classes = useSocialSectionStyles();

  return (
    <>
      <ul className={classes.phones}>
        <li className={classes.phoneItem}>+38065 55 8888 </li>
        <li className={classes.phoneItem}>+38065 55 8888 </li>
        <li className={classes.phoneItem}>+38065 55 8888 </li>
      </ul>
      <div className={classes.socialSection}>
        <button className={classes.socialButton}>
          <IconTelegram />
        </button>
        <button className={classes.socialButton}>
          <IconFacebook />
        </button>
        <button className={classes.socialButton}>
          <IconInstagram />
        </button>
      </div>
    </>
  );
});
