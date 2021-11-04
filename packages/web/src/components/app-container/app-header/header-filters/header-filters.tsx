import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import Tooltip from '@material-ui/core/Tooltip';
import EventIcon from '@material-ui/icons/Event';

import { useAppHeaderFiltersStyles } from './use-header-filters-styles';
import { FISHING_TYPES_SELECT_LIST } from '../../../../store/lakes';
import { globalMessages } from '../../../../store/i18n';
import { useHeaderFiltersLogic } from './use-header-filters-logic';
import { AppDatePicker } from '../../../controls/app-datepicker';

export const HeaderFilters = memo(() => {
  const classes = useAppHeaderFiltersStyles();
  const { formatMessage } = useIntl();
  const {
    isDatePickerOpened,
    onDateSelected,
    openDatePicker,
    closeDatePicker,
    onLinkClick,
    lakeFilters: { date },
  } = useHeaderFiltersLogic();

  return (
    <div className={classes.container}>
      <ul className={classes.fishingTypes}>
        {FISHING_TYPES_SELECT_LIST.map(({ label, value }, key) => (
          <li
            key={key}
            onClick={onLinkClick(value)}
            className={classes.fishingTypeItem}
          >
            {formatMessage(label)}
          </li>
        ))}
      </ul>
      <div className={classes.dateFilter}>
        <Tooltip
          className={classes.dateIcon}
          title={formatMessage(globalMessages.date)}
        >
          <EventIcon onClick={openDatePicker} />
        </Tooltip>
        <AppDatePicker
          variant='dialog'
          cancelLabel=''
          open={isDatePickerOpened}
          value={date}
          label={globalMessages.date}
          wrapperClassName={classes.datePickerWrapper}
          onClose={closeDatePicker}
          className={classes.datePicker}
          onChange={onDateSelected}
        />
      </div>
    </div>
  );
});
