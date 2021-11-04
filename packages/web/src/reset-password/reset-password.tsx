import React, { memo } from 'react';

import { ROUTES } from '../app.constants';
import { AppLogo } from '../components/app-logo';
import { globalMessages } from '../store/i18n';
import { resetPasswordMessages } from './reset-password.messages';

import {
  useResetPasswordLogic,
  validationResolver,
} from './use-reset-password-logic';
import { useResetPasswordStyles } from './use-reset-password-styles';
import { AppCopyright } from '../components/app-copyright';
import { AppSubmitButton } from '../components/app-button/app-submit-button';
import { AppLink } from '../components/app-link';
import { AppForm } from '../components/app-form';
import { FormField } from '../components/controls/form-field';

export const ResetPassword = memo(() => {
  const classes = useResetPasswordStyles();
  const { onSubmit } = useResetPasswordLogic();

  return (
    <div className={classes.formWrapper}>
      <AppLogo size='default' type='colored' />
      <AppForm
        onSubmit={onSubmit}
        formConfig={{ validationResolver }}
        className={classes.form}
      >
        <FormField
          name='email'
          type='email'
          required
          label={globalMessages.email}
        />
        <AppSubmitButton
          color='primary'
          text={resetPasswordMessages.resetPassword}
        />
      </AppForm>

      <AppLink
        variant='body2'
        to={ROUTES.signIn}
        className={classes.resetLink}
        text={resetPasswordMessages.backToSignIn}
      />
      <AppCopyright />
    </div>
  );
});
