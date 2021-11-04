import {
  validateRequiredFiled,
  validateEmail,
  validatePhone,
} from './validation-service';

export const REQUIRED_STRATEGY = [validateRequiredFiled];
export const EMAIL_STRATEGY = [validateEmail, validateRequiredFiled];
export const PHONE_STRATEGY = [validatePhone, validateRequiredFiled];
