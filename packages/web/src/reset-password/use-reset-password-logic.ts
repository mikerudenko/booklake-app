import { useCallback } from 'react';

import {
  createValidationResolver,
  VALIDATION_STRATEGIES,
} from '../services/validation-service';

import { useAuthConnect } from '../store/auth';
import { META_THUNK } from '../app.constants';

export type ResetPasswordValues = {
  email: string;
};

export const useResetPasswordLogic = () => {
  const { ResetPasswordRequest } = useAuthConnect();

  const onSubmit = useCallback(
    async (payload: ResetPasswordValues) => {
      return ResetPasswordRequest({ payload, meta: META_THUNK });
    },
    [ResetPasswordRequest],
  );

  return { onSubmit };
};

export const validationResolver = createValidationResolver({
  email: VALIDATION_STRATEGIES.email,
});
