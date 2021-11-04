import React, { memo, useCallback } from 'react';
import { Form } from 'react-final-form';
import { useIntl } from 'react-intl';

import { globalMessages } from '../../store/i18n';
import { userSettingsFormMessages } from './UserSettingsForm.messages';
import { userSettingsFormValidationStrategy } from './UserSettingsForm.validation';
import { useUserSettingsFormLogic } from './useUserSettingsFormLogic';
import { useUserSettingsFormStyles } from './useUserSettingsFormStyles';
import { ImageDropZoneType } from '../controls/app-image-dropzone';
import { AppField } from '../controls/app-field';
import { AppInfoBlock } from '../app-info-block';
import { AppSubmitButton } from '../app-button/app-submit-button';

export const UserSettingsForm = memo(() => {
  const { formatMessage } = useIntl();
  const { onSubmit, initialValues } = useUserSettingsFormLogic();

  const classes = useUserSettingsFormStyles();
  const renderFormContent = useCallback(
    (formState) => {
      const { handleSubmit } = formState;
      return (
        <div className={classes.container}>
          <form onSubmit={handleSubmit}>
            <AppField
              name='avatar'
              type='imageDropzoneSingle'
              imageDropzoneType={ImageDropZoneType.circle}
              containerClassName={classes.avatar}
            />
            <AppInfoBlock>
              {formatMessage(userSettingsFormMessages.addAvatarInfoMessage)}
            </AppInfoBlock>
            <AppField
              name='displayName'
              type='text'
              label={userSettingsFormMessages.fullName}
            />
            <AppField name='email' type='email' label={globalMessages.email} />
            <AppField
              name='password'
              type='password'
              fullWidth
              label={globalMessages.newPassword}
            />
            <AppField
              name='confirmPassword'
              type='password'
              label={globalMessages.confirmPassword}
            />
            <AppSubmitButton color='primary' text={globalMessages.save} />
          </form>
        </div>
      );
    },
    [classes.container, classes.avatar, formatMessage],
  );

  return (
    <Form
      {...{
        render: renderFormContent,
        initialValues,
        onSubmit,
        validate: userSettingsFormValidationStrategy,
      }}
    />
  );
});
