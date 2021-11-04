import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { useIntl, MessageDescriptor } from 'react-intl';
import c from 'classnames';

import { useLakeDetailsFormStyles } from './use-lake-details-form-styles';
import { lakeDetailsMessages } from '../LakeDetails.messages';
import { FISHING_DAY_TIME_SELECT_LIST } from '../../store/lakes';
import { LakeShortInfo } from '../../components/lake-short-info';
import { useLakeDetailsFormLogic } from './use-lake-details-form-logic';
import { globalMessages } from '../../store/i18n';
import { AppDatePicker } from '../../components/controls/app-datepicker';
import { AppSelect } from '../../components/controls/app-select';

export type LakeDetailsFormProps = {
  address: string;
  minFishingPrice: number;
  className: string;
  currency: MessageDescriptor;
  id: string;
};

export const LakeDetailsForm = memo(
  ({
    address,
    minFishingPrice,
    currency,
    id,
    className,
  }: LakeDetailsFormProps) => {
    const classes = useLakeDetailsFormStyles();
    const { formatMessage } = useIntl();
    const {
      onDatePickerChange,
      onDayTimeChange,
      dayTimeType,
      date,
      isBookedPlacesLoading,
      currentLakeFreePlacesCount,
      isSelectPlaceButtonDisabled,
      onSelectPlaceButtonClick,
    } = useLakeDetailsFormLogic();

    return (
      <Card className={c(classes.card, className)}>
        <div className={classes.cardHeader}>
          {formatMessage(lakeDetailsMessages.selectionOptions)}
        </div>
        <div className={classes.cardContent}>
          <AppDatePicker
            onChange={onDatePickerChange}
            inputVariant={'outlined' as const}
            variant={'dialog' as const}
            value={date}
            label={globalMessages.date}
            className={classes.formDate}
          />
          <AppSelect
            name='dayTimeType'
            label={lakeDetailsMessages.selectDayType}
            options={FISHING_DAY_TIME_SELECT_LIST}
            onChange={onDayTimeChange}
            value={dayTimeType}
          />
          <LakeShortInfo
            {...{ address, minFishingPrice, currency }}
            freePlaceCount={currentLakeFreePlacesCount}
            loadingFreePlaces={isBookedPlacesLoading}
          />
          <Button
            size='small'
            color='secondary'
            variant='contained'
            onClick={onSelectPlaceButtonClick}
            disabled={isSelectPlaceButtonDisabled}
            className={classes.selectPlaceButton}
          >
            {formatMessage(lakeDetailsMessages.selectPlace)}
          </Button>
        </div>
      </Card>
    );
  },
);
