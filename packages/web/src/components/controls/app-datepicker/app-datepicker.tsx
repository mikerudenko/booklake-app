import React, { memo } from 'react';
import { useIntl, MessageDescriptor } from 'react-intl';

import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';
import { KeyboardDatePicker } from '@material-ui/pickers';
import c from 'classnames';

import { useAppDatePickerStyles } from './useAppDatePickerStyles';

type AppDatePicker = {
  wrapperClassName?: string;
  label: MessageDescriptor;
  open?: boolean;
};

export const AppDatePicker = memo(
  ({
    open,
    wrapperClassName,
    label,
    ...rest
  }: AppDatePicker & BasePickerProps) => {
    const classes = useAppDatePickerStyles();
    const { formatMessage } = useIntl();

    if (typeof open !== 'undefined') {
      // @ts-ignore
      rest.open = open;
    }

    return (
      <div className={c(classes.datepickerWrapper, wrapperClassName)}>
        <KeyboardDatePicker
          label={formatMessage(label)}
          autoOk
          disablePast
          format='dd/MM/yyyy'
          inputVariant='outlined'
          {...rest}
        />
      </div>
    );
  },
);
