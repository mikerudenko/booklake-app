import React, { memo, useCallback } from 'react';
import { Form } from 'react-final-form';
import Grid from '@material-ui/core/Grid';

import { useSearchFiltersStyles } from './use-search-filters-styles';
import { globalMessages } from '../../store/i18n';
import {
  FISHING_TYPES_SELECT_LIST,
  FISHING_DAY_TIME_SELECT_LIST,
  LAKE_OPTION_TYPES_SELECT_LIST,
  FISH_SELECT_LIST,
} from '../../store/lakes';
import { useSearchFiltersLogic } from './use-search-filters-logic';
import { AppField } from '../../components/controls/app-field';
import { AppSubmitButton } from '../../components/app-button/app-submit-button';
import { AppForm } from '../../components/app-form';

export const SearchFilters = memo(() => {
  const classes = useSearchFiltersStyles();
  const { applyFilters, lakeFilters } = useSearchFiltersLogic();

  const renderFormContent = useCallback(
    (formState) => {
      const { handleSubmit } = formState;
      return (
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <AppField
                name='date'
                variant='inline'
                label={globalMessages.selectDate}
                type='datepicker'
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AppField
                name='fishingType'
                options={FISHING_TYPES_SELECT_LIST}
                label={globalMessages.fishingType}
                type='select'
                labelValues={{ quantity: 1 }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AppField
                name='dayTimeType'
                options={FISHING_DAY_TIME_SELECT_LIST}
                label={globalMessages.dayTimeTypes}
                labelValues={{ quantity: 1 }}
                type='select'
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AppField
                name='optionTypes'
                options={LAKE_OPTION_TYPES_SELECT_LIST}
                label={globalMessages.option}
                isMultiple
                type='select'
                labelValues={{ quantity: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AppField
                name='fish'
                options={FISH_SELECT_LIST}
                label={globalMessages.fish}
                isMultiple
                type='select'
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AppSubmitButton
                size='large'
                className={classes.applyButton}
                color='secondary'
                text={globalMessages.apply}
              />
            </Grid>
          </Grid>
        </form>
      );
    },
    [classes.applyButton, classes.form],
  );

  return (
    <AppForm
      onSubmit={applyFilters}
      formConfig={{ defaultValues: lakeFilters }}
    >
      {/* <FormField
      /> */}
    </AppForm>
  );
});
