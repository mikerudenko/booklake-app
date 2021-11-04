import React, { memo, useCallback } from 'react';
import { FieldArray } from 'react-final-form-arrays';
import isEqual from 'lodash/isEqual';

import { LakeSettingsTranslation } from '../lake-settings-translation';
import { getEmptyTranslation } from '../lake-settings.constants';
import { AppAddButton } from '../../../components/app-button/app-add-button';

interface LakeSettingsTranslationsArrayProps {
  push(name: string, translation: any): void;
}

export const LakeSettingsTranslationArray = memo(
  ({ push }: LakeSettingsTranslationsArrayProps) => {
    const name = 'translations';

    const onAddClick = useCallback(() => {
      push(name, getEmptyTranslation());
    }, [push, name]);

    const renderTranslation = useCallback(
      ({ fields }) =>
        fields.map((fieldName: string, index: number) => (
          <LakeSettingsTranslation
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
        <FieldArray {...{ name, isEqual }}>{renderTranslation}</FieldArray>
        <AppAddButton onClick={onAddClick} />
      </>
    );
  },
);
