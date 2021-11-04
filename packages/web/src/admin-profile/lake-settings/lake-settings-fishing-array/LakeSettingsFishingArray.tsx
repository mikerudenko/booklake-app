import React, { memo, useCallback } from 'react';
import { FieldArray } from 'react-final-form-arrays';
import isEqual from 'lodash/isEqual';
import { Grid } from '@material-ui/core';
import { Fishing } from '@booklake/core';

import { LakeSettingsFishing } from '../lake-settings-fishing';
import { getEmptyFishing } from '../lake-settings.constants';
import { AppAddButton } from '../../../components/app-button';

type LakeSettingsFishingArrayProps = {
  push(name: string, fishing: Partial<Fishing>): void;
};

export const LakeSettingsFishingArray = memo(
  ({ push }: LakeSettingsFishingArrayProps) => {
    const arrayFieldName = 'fishings';

    const onAddClick = useCallback(() => {
      push(arrayFieldName, getEmptyFishing());
    }, [push]);

    const renderFishing = useCallback(
      ({ fields }) =>
        fields.map((fieldName: string, index: number) => (
          <LakeSettingsFishing
            key={fieldName}
            arrayFieldName={arrayFieldName}
            name={fieldName}
            push={push}
            value={fields.value[index]}
            index={index}
            remove={fields.remove}
          />
        )),
      [push],
    );

    return (
      <Grid item xs={12}>
        <FieldArray {...{ name: arrayFieldName }} isEqual={isEqual}>
          {renderFishing}
        </FieldArray>
        <AppAddButton onClick={onAddClick} />
      </Grid>
    );
  },
);
