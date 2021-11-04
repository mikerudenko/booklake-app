import { Loadable } from '../components/loadable';

export const SignIn = Loadable(() =>
  import('./sign-in').then((module: any) => ({ default: module.SignIn })),
);
