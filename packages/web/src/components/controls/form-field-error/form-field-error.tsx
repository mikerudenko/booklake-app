import React, { memo } from 'react';
import { useFormFieldErrorStyles } from './use-form-field-error-styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import c from 'classnames';
import { useIntl, MessageDescriptor } from 'react-intl';

export type FormFieldErrorProps = {
  showError: boolean;
  error?: string | MessageDescriptor;
  className?: string;
};

export const FormFieldError = memo(
  ({ showError, error, className }: FormFieldErrorProps) => {
    const classes = useFormFieldErrorStyles();
    const { formatMessage } = useIntl();
    return showError && error ? (
      <FormHelperText color='primary' className={c(classes.error, className)}>
        {typeof error === 'string' ? error : formatMessage(error)}
      </FormHelperText>
    ) : (
      <span className={classes.stub} />
    );
  },
);
