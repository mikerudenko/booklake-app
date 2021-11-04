import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_ROLES } from '@booklake/core';
import { UserPayload } from '@booklake/core';
import { noopAction, prepareAction } from '../../store-utils';
import { MetaThunk } from '../../app.types';


export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null as any,
    role: USER_ROLES.user as any,
  },
  reducers: {
    AuthRequest: noopAction,
    AuthError: noopAction,
    AuthSuccess: {
      reducer(state, action: PayloadAction<UserPayload, string, any, never>) {
        state.user = action.payload.user;
        state.role = action.payload.role;
      },
      prepare: prepareAction,
    },
    ResetPasswordLinkSend: noopAction,
    ResetPasswordRequest: noopAction,
    ResetPasswordError: noopAction,
    UpdateUserSuccess: {
      prepare: prepareAction,
      reducer: (
        state,
        action: PayloadAction<UserPayload, string, MetaThunk>,
      ) => {
        state.user = action.payload;
      },
    },

    SignOutRequest: noopAction,
    SignOutSuccess: {
      prepare: prepareAction,
      reducer: (state, action: PayloadAction<null, string, MetaThunk>) => {
        state.user = null;
        state.role = USER_ROLES.user;
      },
    },
    SignOutError: noopAction,
    UpdateUserError: noopAction,
    UpdateUserRequest: noopAction,
  },
});
