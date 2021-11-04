import Loadable from 'react-loadable';
import React, { FC } from 'react';

import { LakeSettingsProps } from './lake-settings';
import { AppLoader } from '../../components/app-loader';

export const LakeSettings = Loadable({
  loader: () => import('./lake-settings'),
  render(
    { LakeSettings }: { LakeSettings: FC<LakeSettingsProps> },
    props: LakeSettingsProps,
  ) {
    return <LakeSettings {...props} />;
  },
  loading: AppLoader,
});
