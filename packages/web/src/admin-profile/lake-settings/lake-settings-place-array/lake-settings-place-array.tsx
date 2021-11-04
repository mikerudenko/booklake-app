import React, { memo, useCallback } from 'react';
import { FieldArray } from 'react-final-form-arrays';
import isEqual from 'lodash/isEqual';
import { LakePlace } from '@booklake/core';

import { LakeSettingsPlace } from '../lake-settings-place';
import { getEmptyPlace } from '../lake-settings.constants';
import { AppAddButton } from '../../../components/app-button';

type LakeSettingsPlaceArrayProps = {
  push(name: string, place: Partial<LakePlace>): void;
};

export const LakeSettingsPlaceArray = memo(
  ({ push }: LakeSettingsPlaceArrayProps) => {
    const name = 'places';

    const onAddClick = useCallback(() => {
      push(name, getEmptyPlace());
    }, [push, name]);

    const renderPlace = useCallback(
      ({ fields }) =>
        fields.map((fieldName: string, index: number) => (
          <LakeSettingsPlace
            key={fieldName}
            name={fieldName}
            index={index}
            remove={fields.remove}
          />
        )),
      [],
    );

    return (
      <>
        <FieldArray {...{ name, isEqual }}>{renderPlace}</FieldArray>
        <AppAddButton onClick={onAddClick} />
      </>
    );
  },
);
