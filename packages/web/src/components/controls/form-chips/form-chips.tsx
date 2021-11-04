import React, { memo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { hasError } from '../../../services/form-service';
import { MessageDescriptor } from 'react-intl';
import { AppSelectOptionType, AppSelectMultiple } from '../app-select';
import { Dictionary } from '../../../services/helper-service';

type FormChipsProps = {
  name: string;
  className?: string;
  label: MessageDescriptor;
  options: AppSelectOptionType[];
  labelValues?: Dictionary<number | string>;
  required?: boolean;
};

export const FormChips = memo(({ name, ...rest }: FormChipsProps) => {
  const {
    register,
    errors,
    setValue,
    getValues,
    formState: { dirty },
  } = useFormContext();
  const { showError, error } = hasError({ errors, name, dirty });

  const values = getValues();

  const onChange: any = useCallback(
    (event: React.ChangeEvent<any>, value: AppSelectOptionType[]) => {
      setValue(
        name,
        value.map(({ value }) => value),
      );
    },
    [name, setValue],
  );

  return (
    <AppSelectMultiple
      register={register}
      {...{
        name,
        showError,
        error,
        onChange,
        value: values[name] as string[],
        ...rest,
      }}
    />
  );
});
