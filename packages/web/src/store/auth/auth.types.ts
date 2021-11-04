import { USER_ROLES, UserPayload } from '@booklake/core';

export interface ResetPasswordPayload {
  email: string;
}

export interface UpdateUserPayload {
  email: string;
  password: string;
  displayName: string;
  uid: string;
  avatar: File | null | string;
}

export interface User {
  email: string;
  id: string;
  role: USER_ROLES;
}

export type AuthState = UserPayload;
