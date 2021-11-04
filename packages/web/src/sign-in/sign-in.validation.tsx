import React from 'react';
import { FormattedMessage } from 'react-intl';

import { SERVER_ERROR_CODES } from '../store/auth';
import { authMessages } from '../store/auth';
import { createValidationResolver } from '../services/validation-service';
import { VALIDATION_STRATEGIES } from '../services/validation-service/validation-service.constants';

export type SignInValues = {
  email: string;
  password: string;
};

export const validationResolver = createValidationResolver({
  email: VALIDATION_STRATEGIES.email,
  password: VALIDATION_STRATEGIES.password,
});

export const resolveServerError = (error: any): any => {
  if (error.code === SERVER_ERROR_CODES.wrongPassword) {
    return ['password', <FormattedMessage {...authMessages.wrongPassword} />];
  }

  return [];
};
