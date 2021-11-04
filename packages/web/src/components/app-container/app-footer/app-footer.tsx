import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { useAppFooterStyles } from './use-app-footer-styles';
import { AppLogo } from '../../app-logo';
import { ROUTES } from '../../../app.constants';
import { appFooterMessages } from './app-footer.messages';
import LogoVisa from './assets/logo-visa.svg';
import LogoMasterCard from './assets/logo-mastercard.svg';

import { globalMessages } from '../../../store/i18n';
import { SocialSection } from '../../social-section';

export const AppFooter = memo(() => {
  const classes = useAppFooterStyles();
  const { formatMessage } = useIntl();

  return (
    <footer className={classes.footer}>
      <div className={classes.mainSectionWrapper}>
        <Container maxWidth='lg' className={classes.mainSection}>
          <Grid container className={classes.mainSectionWrapper} spacing={3}>
            <Grid item xs={12} md={3} className={classes.footerLogoWrapper}>
              <AppLogo size='default' type='white' />
            </Grid>
            <Grid item xs={12} md={6} className={classes.bottomNav}>
              <Grid item xs={12} md={6} className={classes.bottomNavColumn}>
                <Link to={ROUTES.profile} className={classes.bottomNavItem}>
                  {formatMessage(globalMessages.profileSettings)}
                </Link>
                <Link
                  to={ROUTES.meetBookLake}
                  className={classes.bottomNavItem}
                >
                  {formatMessage(globalMessages.meetBookLake)}
                </Link>
                <Link to={ROUTES.faq} className={classes.bottomNavItem}>
                  {formatMessage(globalMessages.faq)}
                </Link>
              </Grid>
              <Grid item xs={12} md={6} className={classes.bottomNavColumn}>
                <Link to={ROUTES.payment} className={classes.bottomNavItem}>
                  {formatMessage(globalMessages.payment)}
                </Link>
                <Link to={ROUTES.partners} className={classes.bottomNavItem}>
                  {formatMessage(globalMessages.partners)}
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} className={classes.rightFooterSection}>
              <SocialSection />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.copyrightWrapper}>
        <Container maxWidth='lg' className={classes.copyright}>
          <p className={classes.copyrightText}>
            {formatMessage(appFooterMessages.copyright)}
          </p>
          <div className={classes.cardSponsors}>
            <img src={LogoMasterCard} alt='MasterCard' />
            <img src={LogoVisa} alt='Visa' />
          </div>
        </Container>
      </div>
    </footer>
  );
});
