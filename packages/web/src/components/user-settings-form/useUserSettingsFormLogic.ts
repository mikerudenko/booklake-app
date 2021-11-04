import get from 'lodash/get';
import { useMemo } from 'react';

import { useAuthConnect } from '../../store/auth/use-auth-connect';
import { UserSettingsFormValues } from './UserSettingsForm.validation';
import { META_THUNK } from '../../app.constants';

export const useUserSettingsFormLogic = () => {
  const { UpdateUserRequest } = useAuthConnect();
  const { user } = useAuthConnect();
  const onSubmit = async ({
    email,
    password,
    displayName,
    avatar,
  }: UserSettingsFormValues) => {
    return await UpdateUserRequest(
      {
        email,
        password,
        displayName,
        avatar,
        uid: get(user, 'uid'),
      },
      META_THUNK,
    );
  };

  const initialValues: UserSettingsFormValues = useMemo(
    () => ({
      email: user.email,
      displayName: user.displayName,
      avatar: user.photoURL,
      password: '',
      confirmPassword: '',
    }),
    [user],
  );

  return {
    initialValues,
    onSubmit,
  };
};
