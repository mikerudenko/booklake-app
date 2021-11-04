import { useCallback } from 'react';
import { useAuthConnect, useAuthLogic } from '../store/auth';
import { META_THUNK } from '../app.constants';
import {
  VALIDATION_STRATEGIES,
  createValidationResolver,
} from '../services/validation-service';

export interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const useSignUpLogic = () => {
  const { AuthRequest } = useAuthConnect();
  const { onAuthWithGoogleClick, onAuthWithFacebookClick } = useAuthLogic();

  const onSubmit = useCallback(
    async (payload: SignUpValues) => {
      try {
        return AuthRequest(payload, { ...META_THUNK, strategy: 'sign-up' });
      } catch (error) {}
    },
    [AuthRequest],
  );

  return {
    onSubmit,
    onSignUpWithGoogleClick: onAuthWithGoogleClick,
    onSignUpWithFacebookClick: onAuthWithFacebookClick,
  };
};

export const validationResolver = createValidationResolver({
  email: VALIDATION_STRATEGIES.email,
  password: VALIDATION_STRATEGIES.password,
  // TODO add match password validation
});
