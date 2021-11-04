import React, { ChangeEvent, memo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { MessageDescriptor } from 'react-intl';
import { hasError } from '../../../services/form-service';
import { Dictionary } from '../../../services/helper-service';
import { AppSelect, AppSelectOptionType } from '../app-select';

type FormSelectProps = {
  name: string;
  className?: string;
  label: MessageDescriptor;
  options: AppSelectOptionType[];
  labelValues?: Dictionary<number | string>;
  required?: boolean;
};

export const FormSelect = memo(({ name, ...rest }: FormSelectProps) => {
  const {
    register,
    errors,
    setValue,
    formState: { dirty },
  } = useFormContext();
  const { showError, error } = hasError({ errors, name, dirty });

  const onChange = useCallback(
    ({
      target: { value },
    }: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
      setValue(name, value);
    },
    [name, setValue],
  );

  return (
    <AppSelect
      register={register}
      {...{
        name,
        showError,
        error,
        onChange,
        ...rest,
      }}
    />
  );
});
