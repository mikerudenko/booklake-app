import React, { FC } from 'react';
import Loadable from 'react-loadable';

import { AppLoader } from '../components/app-loader';

export const SignUp = Loadable({
  loader: () => import('./sign-up'),
  render({ SignUp }: { SignUp: FC }) {
    return <SignUp />;
  },
  loading: AppLoader,
});
