import React, { memo, useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { MessageDescriptor, useIntl } from 'react-intl';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';

import { AppFieldError } from '../app-field-error';
import { useAppPhoneFieldStyles } from './use-app-phone-field-styles';
import { MaskType, MaskMap } from './app-mask-field.constants';
import { isFieldErrorShown } from '../../../services/form-service';

export interface AppMaskFieldProps {
  label: MessageDescriptor;
  inputProps?: Record<string, any>;
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
  mask: MaskType;
  type: 'text' | 'number';
}

export const AppMaskField = memo(
  ({
    label,
    className,
    mask,
    inputProps,
    type,
    ...fieldRenderProps
  }: AppMaskFieldProps & FieldRenderProps<string, HTMLInputElement>) => {
    const {
      input: { onChange, name, value },
      meta: { error, submitError },
    } = fieldRenderProps;
    const classes = useAppPhoneFieldStyles();
    const showError = isFieldErrorShown(fieldRenderProps as any);
    const { formatMessage } = useIntl();

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
      },
      [onChange],
    );

    return (
      <FormControl error={showError as any} className={classes.wrapper}>
        <InputMask mask={MaskMap[mask]} value={value} onChange={handleChange}>
          {() => (
            <TextField
              {...{
                name,
                label: formatMessage(label),
                value,
              }}
              variant='outlined'
              error={showError as any}
              className={classes.input}
            />
          )}
        </InputMask>

        <AppFieldError
          {...{
            showError: showError as any,
            error,
            submitError,
          }}
        />
      </FormControl>
    );
  },
);
