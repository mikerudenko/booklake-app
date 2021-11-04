import { defineMessages } from 'react-intl';

export const validationServiceMessages = defineMessages({
  invalidEmail: {
    id: 'validation-service.invalid-email',
    defaultMessage: 'Email is invalid',
  },
  requiredField: {
    id: 'validation-service.required-field',
    defaultMessage: 'Field is required',
  },
  passwordDoesNotMatchConfirm: {
    id: 'validation-service.password-does-not-match-confirm',
    defaultMessage: "Password doesn't match",
  },
  invalidCreditCard: {
    id: 'validation-service.invalid-email',
    defaultMessage: 'Credit card is invalid',
  },
  invalidPhone: {
    id: 'validation-service.invalid-phone',
    defaultMessage: 'Phone is invalid',
  },
});
