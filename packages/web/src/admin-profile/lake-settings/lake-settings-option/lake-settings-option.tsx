import React, { memo, useCallback } from 'react';

import { globalMessages } from '../../../store/i18n';
import { LAKE_OPTION_TYPES_SELECT_LIST } from '../../../store/lakes';
import { useLakeSettingsOptionStyles } from './use-lake-settings-option-styles';
import { AppField } from '../../../components/controls/app-field';
import { AppRemoveButton } from '../../../components/app-button/app-remove-button';

interface LakeSettingsOptionProps {
  name: string;
  index: number;
  remove(index: number): void;
}

export const LakeSettingsOption = memo(
  ({ name, remove, index }: LakeSettingsOptionProps) => {
    const classes = useLakeSettingsOptionStyles();

    const onRemoveClick = useCallback(() => {
      remove(index);
    }, [index, remove]);

    return (
      <div className={classes.wrapper}>
        <AppField
          name={`${name}.type`}
          required
          options={LAKE_OPTION_TYPES_SELECT_LIST}
          label={globalMessages.option}
          labelValues={{ quantity: 1 }}
          className={classes.optionType}
          type='select'
        />
        <AppField
          name={`${name}.price`}
          type='number'
          required
          className={classes.optionPrice}
          label={globalMessages.price}
        />
        <AppRemoveButton onClick={onRemoveClick} />
      </div>
    );
  },
);
