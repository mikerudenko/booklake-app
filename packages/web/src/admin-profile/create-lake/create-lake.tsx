import React, { memo } from 'react';

import { getInitialLakeValues } from '../lake-settings/lake-settings.constants';
import { LakeSettings } from '../lake-settings';
import { globalMessages } from '../../store/i18n';

export const CreateLake = memo(() => {
  return (
    <LakeSettings
      initialValues={getInitialLakeValues()}
      submitText={globalMessages.create}
    />
  );
});
