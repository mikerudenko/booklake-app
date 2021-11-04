import React, { memo } from 'react';
import { USER_ROLES } from '@booklake/core';

import { ManagerProfile } from '../manager-profile';
import { UserProfile } from '../user-profile';
import { useAuthConnect } from '../store/auth';
import { AdminProfile } from '../admin-profile';
import { AppLoader } from '../components/app-loader';

const profilePages: Record<string, any> = {
  [USER_ROLES.admin]: AdminProfile,
  [USER_ROLES.user]: UserProfile,
  [USER_ROLES.manager]: ManagerProfile,
};

export const Profile = memo(() => {
  const { role } = useAuthConnect();
  const ProfilePage = profilePages[role];

  if (!role) {
    return <AppLoader />;
  }

  return <ProfilePage />;
});
