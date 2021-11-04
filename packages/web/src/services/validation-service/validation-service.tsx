import get from 'lodash/get';
import set from 'lodash/set';
import React, { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { Dictionary } from '../helper-service/helper-service.constants';
import Joi from '@hapi/joi';
import {
  VALIDATION_PATTERNS,
  validationMessages,
} from './validation-service.constants';
import { validationServiceMessages } from './validation-service.messages';

// !Attention - this code will be removed
type SingleStrategy = Array<
  (value: any, values: Dictionary<any>) => ReactNode | boolean
>;

interface ValidationStrategy {
  [key: string]: SingleStrategy | ValidationStrategy;
}

const validateObjectsArray = (values: any[], strategy: ValidationStrategy) =>
  values && values.map((value) => validationStrategy(strategy)(value));

const validatePrimitiveField = ({
  values,
  value,
  strategy,
}: {
  values: any;
  value: any;
  strategy: SingleStrategy;
}) => {
  for (const validator of strategy) {
    const invalidResult = validator(value, values);
    if (invalidResult) {
      return invalidResult;
    }
  }

  return false;
};

export const validationStrategy = <Values extends Dictionary<any>>(
  strategy: ValidationStrategy,
) => (values: Values) =>
  Object.entries(strategy).reduce(
    (
      errors: Record<keyof ValidationStrategy, ReactNode | boolean>,
      [key, strategy],
    ) => {
      const isObjectsArray = !Array.isArray(strategy);
      const value = get(values, key);
      const invalidResult = isObjectsArray
        ? validateObjectsArray(value, strategy as ValidationStrategy)
        : validatePrimitiveField({
            value,
            values,
            strategy: strategy as SingleStrategy,
          });

      if (invalidResult) {
        set(errors, key, invalidResult);
      }
      return errors;
    },
    {},
  );

export const validateEmail = (value: string) => {
  const error = (
    <FormattedMessage {...validationServiceMessages.invalidEmail} />
  );
  if (typeof value === 'string') {
    return VALIDATION_PATTERNS.emailRegexp.test(value) ? false : error;
  }

  return error;
};

const isEmptyValue = (value: any) => [null, undefined, ''].includes(value);

export const validateRequiredFiled = (value: any) => {
  const hasError = Array.isArray(value)
    ? value.every(isEmptyValue)
    : isEmptyValue(value);

  return hasError ? (
    <FormattedMessage {...validationServiceMessages.requiredField} />
  ) : (
    false
  );
};

export const validateConfirmPassword = (
  value: string,
  values: Record<string, any>,
) => {
  return value !== values.password ? (
    <FormattedMessage
      {...validationServiceMessages.passwordDoesNotMatchConfirm}
    />
  ) : (
    false
  );
};

export const validateCreditCard = (value: string) => {
  return VALIDATION_PATTERNS.creditCardRegexp.test(value) ||
    VALIDATION_PATTERNS.ibanCardRegexp.test(value) ? (
    false
  ) : (
    <FormattedMessage {...validationServiceMessages.invalidCreditCard} />
  );
};

export const validatePhone = (value: string) => {
  return VALIDATION_PATTERNS.phoneRegexp.test(value) ? (
    false
  ) : (
    <FormattedMessage {...validationServiceMessages.invalidPhone} />
  );
};

// !Attention - the code above will be removed

export const createValidationResolver = (validationSchema: any) => (
  data: Dictionary<any>,
  validationContext?: object,
) => {
  const { error, value: values } = Joi.object(validationSchema).validate(data);

  return {
    values: error ? {} : values,
    errors: error
      ? error.details.reduce((previous: any, currentError: any) => {
          return {
            ...previous,
            [currentError.path[0]]:
              validationMessages[currentError.type as string],
          };
        }, {})
      : {},
  };
};
