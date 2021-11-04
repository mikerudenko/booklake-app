import React, { memo, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { FieldArray } from 'react-final-form-arrays';
import isEqual from 'lodash/isEqual';

import { LakeSettingsOption } from '../lake-settings-option';
import { AppAddButton } from '../../../components/app-button/app-add-button';

type LakeSettingsOptionArrayProps = {
  push(name: string, option: undefined): void;
};

export const LakeSettingsOptionArray = memo(
  ({ push }: LakeSettingsOptionArrayProps) => {
    const name = 'options';

    const onAddClick = useCallback(() => {
      push(name, undefined);
    }, [push, name]);

    const renderOption = useCallback(
      ({ fields }) =>
        fields.map((fieldName: string, index: number) => (
          <LakeSettingsOption
            key={fieldName}
            name={fieldName}
            index={index}
            remove={fields.remove}
          />
        )),
      [],
    );

    return (
      <Grid item xs={12} md={10}>
        <FieldArray {...{ name, isEqual }} name={name}>
          {renderOption}
        </FieldArray>
        <AppAddButton onClick={onAddClick} />
      </Grid>
    );
  },
);
