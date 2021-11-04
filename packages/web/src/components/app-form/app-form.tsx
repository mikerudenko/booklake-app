import React, { memo, FC } from 'react';
import { useForm, FormContext } from 'react-hook-form';

type AppFormProps = {
  onSubmit(values: any, e: any): void;
  className?: string;
  formConfig?: Record<string, any>;
};

const defaultFormConfig = {
  mode: 'onChange' as any,
  reValidateMode: 'onChange' as any,
  defaultValues: {},
  validationResolver: undefined,
  validationContext: undefined,
  validateCriteriaMode: 'firstError' as any,
  submitFocusError: true,
  nativeValidation: false,
};

export const AppForm: FC<AppFormProps> = memo(
  ({ children, className, formConfig, onSubmit }) => {
    const methods = useForm({ ...defaultFormConfig, ...formConfig });

    return (
      <FormContext {...methods}>
        <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormContext>
    );
  },
);
