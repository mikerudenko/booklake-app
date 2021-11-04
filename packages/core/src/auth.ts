import { USER_ROLES } from './rbac';

export enum AUTH_PROVIDERS {
  google = 'google',
  facebook = 'facebook',
}

export interface UpdateUserPayload {
  email: string;
  password: string;
  displayName: string;
  photoURL: string;
  uid: string;
}

export interface CredentialsPayload {
  email: string;
  password: string;
}

export interface ProviderPayload {
  locale: string;
  provider: AUTH_PROVIDERS;
}

export interface UserPayload {
  user: Record<string, any> | null;
  role: USER_ROLES | null;
}
