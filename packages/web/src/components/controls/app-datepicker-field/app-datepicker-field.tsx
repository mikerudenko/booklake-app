import React, { memo, useCallback } from 'react';

import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import { FieldRenderProps } from 'react-final-form';
import { MessageDescriptor } from 'react-intl';
import { AppDatePicker } from '../app-datepicker';

export interface AppDatePickerFieldProps {
  onChange(value: any): void;
  open: boolean;
  variant: 'dialog' | 'inline' | 'static';
  className: string;
  value: ParsableDate;
  label: MessageDescriptor;
}

export const AppDatePickerField = memo(
  ({
    meta: { submitting, error, touched },
    input: { onBlur, value, ...inputProps },
    variant,
    label,
    ...others
  }: AppDatePickerFieldProps & FieldRenderProps<string, any>) => {
    const onChange = useCallback(
      (date: any) => {
        Date.parse(date)
          ? inputProps.onChange(date.toISOString())
          : inputProps.onChange(null);
      },
      [inputProps],
    );
    return (
      <AppDatePicker
        {...inputProps}
        {...others}
        disablePast
        label={label}
        format='dd/MM/yyyy'
        value={value ? new Date(value) : null}
        disabled={submitting}
        error={error && touched}
        onChange={onChange}
        variant={variant}
      />
    );
  },
);
