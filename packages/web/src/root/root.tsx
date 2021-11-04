import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { memo, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useLocation } from 'react-router-dom';
import { AdvancedSearch } from '../advanced-search';
import { ROUTES } from '../app.constants';
import { LakeDetails } from '../lake-details';
import { Lakes } from '../lakes';
import { NotFound } from '../not-found';
import { OrderDetails } from '../oder-details';
import { OfflinePage } from '../offline-page';
import { PlacesSelection } from '../places-selection';
import { Profile } from '../profile';
import { ResetPassword } from '../reset-password';
import { SignIn } from '../sign-in';
import { SignUp } from '../sign-up';
import { useOnlineStatus } from '../hooks/use-online-status';
import { useI18nConnect } from '../store/i18n';
import { useNotificationsLogic } from '../store/notifications';
import { useRootStyles } from './use-root-styles';

export const Root = memo(() => {
  const { dateLocale } = useI18nConnect();
  const location = useLocation();
  const onlineStatus = useOnlineStatus();

  useRootStyles();
  useNotificationsLogic();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!onlineStatus) {
    return <OfflinePage />;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={dateLocale}>
      <Switch>
        <Route path={ROUTES.signIn} component={SignIn} />
        <Route path={ROUTES.forgotPassword} component={ResetPassword} />
        <Route path={ROUTES.signUp} component={SignUp} />
        <Route path={ROUTES.profile} component={Profile} />
        <Route path={ROUTES.notFound} component={NotFound} />
        <Route path={ROUTES.search} component={AdvancedSearch} />
        <Route path={`${ROUTES.lakes}/:id`} component={LakeDetails} />
        <Route path={ROUTES.dashboard} exact component={Lakes} />
        <Route path={ROUTES.orderDetails} exact component={OrderDetails} />
        <Route path={ROUTES.placesSelection} component={PlacesSelection} />
        <Redirect to={ROUTES.notFound} />
      </Switch>
    </MuiPickersUtilsProvider>
  );
});
