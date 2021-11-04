import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { ROUTES } from '../app.constants';
import { AppContainer } from '../components/app-container';
import { UserSettingsForm } from '../components/user-settings-form';
import { adminProfileMessages } from './admin-profile.messages';
import { LakesTable } from './lakes-table';
import { EditLake } from './edit-lake';
import { CreateLake } from './create-lake';
import { globalMessages } from '../store/i18n';
import { useAppAdminProfileStyles } from './use-admin-profile-styles';
import { AppTabs } from '../components/app-tabs';

const urlList = {
  settings: ROUTES.profile + ROUTES.settings,
  lakes: ROUTES.profile + ROUTES.lakes,
  createLake: ROUTES.profile + ROUTES.createLake,
  editLake: ROUTES.profile + ROUTES.lakes + '/:id',
};

const tabs = [
  {
    label: globalMessages.profileSettings,
    to: urlList.settings,
  },
  {
    label: adminProfileMessages.lakes,
    to: urlList.lakes,
  },
  {
    label: adminProfileMessages.createLake,
    to: urlList.createLake,
  },
];

export const AdminProfile = memo(() => {
  const classes = useAppAdminProfileStyles();
  return (
    <AppContainer showFooter={false}>
      <AppTabs {...{ tabs }} isRouter wrapperClassName={classes.wrapper}>
        <Switch>
          <Route path={urlList.settings} component={UserSettingsForm} />
          <Route path={urlList.lakes} exact component={LakesTable} />
          <Route path={urlList.editLake} component={EditLake} />
          <Route path={urlList.createLake} component={CreateLake} />
          <Redirect to={urlList.settings} />
        </Switch>
      </AppTabs>
    </AppContainer>
  );
});
