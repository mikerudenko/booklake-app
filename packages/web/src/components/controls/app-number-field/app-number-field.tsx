import React, { memo, useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { MessageDescriptor, useIntl } from 'react-intl';
import c from 'classnames';
import NumberFormat from 'react-number-format';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { AppFieldError } from '../app-field-error';
import { useAppNumberInputStyles } from './use-app-number-field-styles';
import { isFieldErrorShown } from '../../../services/form-service';

export interface AppNumberFieldProps {
  label: MessageDescriptor;
  inputProps?: Record<string, any>;
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
}

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  const onValueChange = useCallback(
    values => {
      onChange({
        target: {
          value: values.floatValue,
        },
      });
    },
    [onChange],
  );

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={onValueChange}
      thousandSeparator
      isNumericString
    />
  );
}

export const AppNumberField = memo(
  ({
    label,
    className,
    inputProps,
    ...fieldRenderProps
  }: AppNumberFieldProps & FieldRenderProps<string, HTMLInputElement>) => {
    const {
      input: { onChange, name, value },
      meta: { error, submitError },
    } = fieldRenderProps;
    const classes = useAppNumberInputStyles(fieldRenderProps);
    const showError = isFieldErrorShown(fieldRenderProps);
    const { formatMessage } = useIntl();

    return (
      <FormControl
        error={showError}
        className={c(classes.formControl, className)}
      >
        <TextField
          {...fieldRenderProps}
          {...{
            name,
            label: formatMessage(label),
            value,
            onChange,
          }}
          variant='outlined'
          error={showError}
          InputProps={{ inputComponent: NumberFormatCustom as any }}
          className={classes.input}
        />
        <AppFieldError
          {...{
            showError,
            error,
            submitError,
          }}
        />
      </FormControl>
    );
  },
);
