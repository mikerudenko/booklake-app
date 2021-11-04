import React, { FC } from 'react';
import Loadable from 'react-loadable';
import { AppLoader } from '../components/app-loader';

export const AdminProfile = Loadable({
  loader: () => import('./admin-profile'),
  render({ AdminProfile }: { AdminProfile: FC }) {
    return <AdminProfile />;
  },
  loading: AppLoader,
});
