import { useCallback } from 'react';

import { useAuthConnect } from '../store/auth/use-auth-connect';
import { useAuthLogic } from '../store/auth/use-auth-logic';
import { SignInValues, resolveServerError } from './sign-in.validation';
import { META_THUNK } from '../app.constants';
import { useForm } from 'react-hook-form';

export const useSignInLogic = () => {
  const { AuthRequest } = useAuthConnect();
  const { onAuthWithGoogleClick, onAuthWithFacebookClick } = useAuthLogic();
  const { setError } = useForm();

  const onSubmit = useCallback(
    async (payload: SignInValues, e) => {
      console.log(e);
      try {
        await AuthRequest(payload, { ...META_THUNK, strategy: 'sign-in' });
      } catch (error) {
        setError(resolveServerError(error));
      }
    },
    [AuthRequest, setError],
  );

  return {
    onSubmit,
    onSignInWithGoogleClick: onAuthWithGoogleClick,
    onSignInWithFacebookClick: onAuthWithFacebookClick,
  };
};
