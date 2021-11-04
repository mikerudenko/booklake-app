import React, { memo, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';

import { globalMessages } from '../../../store/i18n';
import {
  LAKE_OPTION_TYPES_SELECT_LIST,
  LAKE_PLACE_TYPE_SELECT_LIST,
} from '../../../store/lakes';
import { lakeSettingsMessages } from '../lake-settings.messages';
import { useLakeSettingsStyles } from '../useLakeSettingsStyles';
import { AppCollapseSection } from '../../../components/app-collapse-section';
import { AppRemoveButton } from '../../../components/app-button/app-remove-button';
import { AppField } from '../../../components/controls/app-field';

interface LakeSettingsPlaceProps {
  name: string;
  index: number;
  remove(index: number): void;
}

export const LakeSettingsPlace = memo(
  ({ name, remove, index }: LakeSettingsPlaceProps) => {
    const classes = useLakeSettingsStyles();

    const onRemoveClick = useCallback(() => {
      remove(index);
    }, [index, remove]);

    return (
      <AppCollapseSection>
        <Grid container spacing={2} className={classes.placeItem}>
          <Grid item xs={12} md={4}>
            <AppField
              name={`${name}.number`}
              type='text'
              variant='outlined'
              label={globalMessages.name}
            />
            <AppField
              name={`${name}.x`}
              variant='outlined'
              label={lakeSettingsMessages.positionX}
              type='number'
            />
            <AppField
              name={`${name}.requiredOptions`}
              options={LAKE_OPTION_TYPES_SELECT_LIST}
              label={globalMessages.requiredOptions}
              isMultiple
              type='select'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppField
              name={`${name}.type`}
              required
              options={LAKE_PLACE_TYPE_SELECT_LIST}
              label={globalMessages.type}
              type='select'
            />
            <AppField
              name={`${name}.y`}
              variant='outlined'
              label={lakeSettingsMessages.positionY}
              type='number'
            />
            <AppField
              name={`${name}.options`}
              options={LAKE_OPTION_TYPES_SELECT_LIST}
              label={globalMessages.option}
              labelValues={{ quantity: 2 }}
              isMultiple
              type='select'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppField
              name={`${name}.picture`}
              type='imageDropzoneSingle'
              imageDropzoneType='round'
              containerClassName={classes.placeDropzone}
            />
          </Grid>
          <Grid item xs={12}>
            <AppField
              name={`${name}.show`}
              label={globalMessages.show}
              type='checkbox'
            />
            <AppField
              name={`${name}.priceForOnePerson`}
              type='checkbox'
              label={lakeSettingsMessages.priceForOnePerson}
            />
            <AppRemoveButton onClick={onRemoveClick} />
          </Grid>
        </Grid>
      </AppCollapseSection>
    );
  },
);
