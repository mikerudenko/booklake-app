import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { COUNTRIES } from '@booklake/core';

import { globalMessages } from '../../../store/i18n';
import { AppField } from '../../../components/controls/app-field';
import {
  COUNTRIES_SELECT_LIST,
  COUNTRIES_REGIONS_SELECT_LISTS_MAP,
} from '../../../app.constants';
import { MaskType } from '../../../components/controls/app-mask-field';

type LakeSettingsContactsProps = {
  country: COUNTRIES;
};

export const LakeSettingsContacts = memo(
  ({ country }: LakeSettingsContactsProps) => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <AppField
          name='contacts.email'
          type='email'
          required
          label={globalMessages.email}
        />
        <AppField
          name='contacts.phone'
          required
          label={globalMessages.phone}
          type='mask'
          mask={MaskType.phone}
        />
        <AppField
          name='contacts.country'
          required
          options={COUNTRIES_SELECT_LIST}
          label={globalMessages.country}
          type='select'
        />
        <AppField
          name='contacts.region'
          required
          options={
            // @ts-ignore
            country ? COUNTRIES_REGIONS_SELECT_LISTS_MAP[country as any] : []
          }
          label={globalMessages.region}
          type='select'
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AppField
          name='contacts.lng'
          required
          label={globalMessages.longitude}
          type='number'
        />
        <AppField
          name='contacts.lat'
          required
          label={globalMessages.latitude}
          type='number'
        />
      </Grid>
    </Grid>
  ),
);
