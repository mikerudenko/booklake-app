import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { memo } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { useIntl, MessageDescriptor } from 'react-intl';

export interface AppCheckboxFieldProps {
  label: MessageDescriptor;
  name: string;
  className?: string;
}

export const AppCheckboxField = memo(
  ({
    label,
    className,
    input: { checked, name, onChange, ...restInput },
    meta,
    ...rest
  }: AppCheckboxFieldProps & FieldRenderProps<any, any>) => {
    const { formatMessage } = useIntl();
    return (
      <FormControlLabel
        {...{ label, className }}
        label={formatMessage(label)}
        control={
          <Checkbox
            {...rest}
            name={name}
            inputProps={restInput}
            onChange={onChange}
            checked={checked}
          />
        }
      />
    );
  },
);
