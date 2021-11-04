import React, { memo } from 'react';
import { Grid } from '@material-ui/core';

import { globalMessages } from '../../../store/i18n';
import { lakeSettingsMessages } from '../lake-settings.messages';
import {
  FISHING_TYPES_SELECT_LIST,
  FISHING_DAY_TIME_SELECT_LIST,
  FISH_SELECT_LIST,
} from '../../../store/lakes';
import { AppSelectOptionType } from '../../../components/controls/app-select';
import { AppLoader } from '../../../components/app-loader';
import { AppField } from '../../../components/controls/app-field';
import { CURRENCY_SELECT_LIST } from '../../../app.constants';
import { MaskType } from '../../../components/controls/app-mask-field';

interface LakeSettingsSensitiveDataProps {
  managersLoading: boolean;
  managersSelectList: AppSelectOptionType[];
}

export const LakeSettingsSensitiveData = memo(
  ({ managersSelectList, managersLoading }: LakeSettingsSensitiveDataProps) => {
    if (managersLoading) {
      return <AppLoader />;
    }

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <AppField
            name='currency'
            required
            fullWidth
            options={CURRENCY_SELECT_LIST}
            label={globalMessages.currency}
            type='select'
          />
          <AppField
            name='managerId'
            required
            fullWidth
            options={managersSelectList}
            label={lakeSettingsMessages.manager}
            type='select'
          />
          <AppField
            name='creditCard'
            variant='outlined'
            required
            fullWidth
            label={lakeSettingsMessages.creditCard}
            type='mask'
            mask={MaskType.card}
          />
          <AppField
            name='svgPath'
            type='text'
            variant='outlined'
            required
            isMultiple
            rows='4'
            fullWidth
            label={lakeSettingsMessages.svgPath}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <AppField
            name='fishTypes'
            options={FISH_SELECT_LIST}
            label={lakeSettingsMessages.fishTypes}
            isMultiple
            type='select'
          />
          <AppField
            name='fishingTypes'
            options={FISHING_TYPES_SELECT_LIST}
            label={globalMessages.fishingType}
            isMultiple
            type='select'
            labelValues={{ quantity: 2 }}
          />
          <AppField
            name='dayTimeTypes'
            options={FISHING_DAY_TIME_SELECT_LIST}
            label={globalMessages.dayTimeTypes}
            labelValues={{ quantity: 2 }}
            type='select'
          />
          <AppField
            name='active'
            type='checkbox'
            label={globalMessages.active}
          />
          <AppField
            name='showInSlider'
            type='checkbox'
            label={lakeSettingsMessages.showInSlider}
          />
        </Grid>
      </Grid>
    );
  },
);
