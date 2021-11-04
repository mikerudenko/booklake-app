import get from 'lodash/get';
import { NestDataObject, FieldError } from 'react-hook-form';

// ! todo remove
export const isFieldErrorShown = ({
  meta: { submitError, dirtySinceLastSubmit, error, touched, pristine },
}: any) => !!(((submitError && !dirtySinceLastSubmit) || error) && touched);

export const isSubmitDisabled = ({
  hasSubmitErrors,
  dirtySinceLastSubmit,
  hasValidationErrors,
}: any) => {
  return hasValidationErrors || (hasSubmitErrors && !dirtySinceLastSubmit);
};

// export const isFormSubmitDisabled = ({
//   isValid,
//   isSubmitting
// }: any)
// ! todo remove

type HasErrorDTO = {
  errors: NestDataObject<Record<string, any>, FieldError>;
  name: string;
  dirty: boolean;
};

export const hasError = ({ errors, name, dirty }: HasErrorDTO) => {
  const error = get(errors, name);
  return {
    error,
    showError: dirty && !!error,
  };
};
