import React, { memo, useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Fishing } from '@booklake/core';
import { globalMessages } from '../../../store/i18n';
import {
  FISHING_DAY_TIME_SELECT_LIST,
  FISHING_DAY_TYPES_SELECT_LIST,
  LAKE_PLACE_TYPE_SELECT_LIST,
} from '../../../store/lakes';
import { useLakeSettingsFishingStyles } from './use-lake-settings-fishing-styles';
import { AppField } from '../../../components/controls/app-field';
import { AppRemoveButton } from '../../../components/app-button/app-remove-button';

type LakeSettingsFishingProps = {
  name: string;
  arrayFieldName: string;
  index: number;
  value: Fishing;
  push(name: string, fishing: Fishing): void;
  remove(index: number): void;
};

export const LakeSettingsFishing = memo(
  ({
    name,
    remove,
    index,
    arrayFieldName,
    push,
    value,
  }: LakeSettingsFishingProps) => {
    const classes = useLakeSettingsFishingStyles();

    const onRemoveClick = useCallback(() => {
      remove(index);
    }, [index, remove]);

    const onCopyClick = useCallback(() => {
      push(arrayFieldName, value);
    }, [push, arrayFieldName, value]);

    return (
      <div className={classes.wrapper}>
        <IconButton
          aria-label='copy'
          onClick={onCopyClick}
          className={classes.button}
        >
          <FileCopyIcon />
        </IconButton>
        <AppField
          name={`${name}.dayType`}
          required
          options={FISHING_DAY_TYPES_SELECT_LIST}
          label={globalMessages.dayType}
          className={classes.select}
          type='select'
        />
        <AppField
          name={`${name}.dayTimeType`}
          required
          options={FISHING_DAY_TIME_SELECT_LIST}
          label={globalMessages.dayTimePeriod}
          className={classes.select}
          type='select'
        />
        <AppField
          type='select'
          name={`${name}.placeType`}
          required
          options={LAKE_PLACE_TYPE_SELECT_LIST}
          label={globalMessages.placeType}
          className={classes.select}
        />
        <AppField
          type='number'
          name={`${name}.price`}
          variant='outlined'
          required
          className={classes.optionPrice}
          label={globalMessages.price}
        />
        <AppField
          name={`${name}.active`}
          type='checkbox'
          className={classes.button}
          label={globalMessages.active}
        />
        <AppRemoveButton onClick={onRemoveClick} />
      </div>
    );
  },
);
