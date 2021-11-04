import React, { memo } from 'react';

import { useEditLakeStyles } from './use-edit-lake-styles';
import { useEditLakeLogic } from './use-edit-lake-logic';
import { LakeSettings } from '../lake-settings/lake-settings';
import { globalMessages } from '../../store/i18n';
import { AppLoader } from '../../components/app-loader';

export const EditLake = memo(() => {
  const { lake } = useEditLakeLogic();
  const classes = useEditLakeStyles();

  if (!lake) {
    return <AppLoader />;
  }

  return (
    <div className={classes.container}>
      <LakeSettings initialValues={lake} submitText={globalMessages.update} />
    </div>
  );
});
