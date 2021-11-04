import TextField from '@material-ui/core/TextField';
import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { MessageDescriptor, useIntl } from 'react-intl';
import { hasError } from '../../../services/form-service';
import { FormFieldError } from '../form-field-error';
import { useFormFieldTextStyles } from './use-form-field-text-styles';
import FormControl from '@material-ui/core/FormControl';
import c from 'classnames';

export type AppFieldTextProps = {
  label: MessageDescriptor;
  name: string;
  required?: boolean;
  type?: 'text' | 'password' | 'email';
  multiline?: boolean;
  rows?: number;
};

export const FormFieldText = memo(
  ({ name, type, label, multiline, rows }: AppFieldTextProps) => {
    const {
      register,
      errors,
      formState: { dirty },
    } = useFormContext();
    const classes = useFormFieldTextStyles();
    const { formatMessage } = useIntl();
    const { showError, error } = hasError({ errors, name, dirty });

    return (
      <FormControl error={showError} className={c(classes.formControl)}>
        <TextField
          {...{
            inputRef: register,
            name,
            label: formatMessage(label),
            type,
            multiline,
            rows,
          }}
          variant='outlined'
          error={showError}
          className={classes.input}
        />
        <FormFieldError {...{ name, showError, error }} />
      </FormControl>
    );
  },
);
