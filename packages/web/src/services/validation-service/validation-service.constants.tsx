import { validationServiceMessages } from './validation-service.messages';
import { Dictionary } from '../helper-service';
import Joi from '@hapi/joi';
import { MessageDescriptor } from 'react-intl';

export const VALIDATION_PATTERNS = {
  // Todo remove
  creditCardRegexp: /^(?:3[47][0-9]{13})$/,
  phoneRegexp: /^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
  ibanCardRegexp: /b[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?!(?:[ ]?[0-9]){3})(?:[ ]?[0-9]{1,2})?/,
};

export const VALIDATION_STRATEGIES = {
  required: Joi.any().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().required(),
  creditCard: Joi.string().creditCard(),
  phone: Joi.string().pattern(VALIDATION_PATTERNS.phoneRegexp, 'numbers'),
};

export const validationMessages: Dictionary<MessageDescriptor> = {
  'string.empty': validationServiceMessages.requiredField,
  passwordMatch: validationServiceMessages.passwordDoesNotMatchConfirm,
  phone: validationServiceMessages.invalidPhone,
  creditCard: validationServiceMessages.invalidCreditCard,
  'string.email': validationServiceMessages.invalidEmail,
};
