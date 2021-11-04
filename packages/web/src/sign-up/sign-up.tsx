import React, { memo } from 'react';
import { ROUTES } from '../app.constants';
import { AppAuthButton } from '../components/app-auth-button';
import { AppSubmitButton } from '../components/app-button/app-submit-button';
import { AppCopyright } from '../components/app-copyright';
import { AppForm } from '../components/app-form';
import { AppLink } from '../components/app-link';
import { AppLogo } from '../components/app-logo';
import { FormField } from '../components/controls/form-field';
import { globalMessages } from '../store/i18n';
import { signUpMessages } from './sign-up.messages';
import { useSignUpLogic, validationResolver } from './use-sign-up-logic';
import { useSignUpStyles } from './use-sign-up-styles';

export const SignUp = memo(() => {
  const {
    onSubmit,
    onSignUpWithGoogleClick,
    onSignUpWithFacebookClick,
  } = useSignUpLogic();
  const classes = useSignUpStyles();

  return (
    <div className={classes.formWrapper}>
      <AppLogo size='default' type='colored' />
      <AppForm
        onSubmit={onSubmit}
        className={classes.form}
        formConfig={{ validationResolver }}
      >
        <FormField
          name='email'
          type='email'
          required
          label={globalMessages.email}
        />
        <FormField
          name='password'
          type='password'
          required
          label={globalMessages.password}
        />
        <FormField
          name='confirmPassword'
          type='password'
          required
          label={globalMessages.confirmPassword}
        />
        <AppSubmitButton color='primary' text={globalMessages.signUp} />
      </AppForm>
      <div className={classes.socialButtons}>
        <AppAuthButton onClick={onSignUpWithGoogleClick} type='google' />
        <AppAuthButton onClick={onSignUpWithFacebookClick} type='facebook' />
      </div>
      <div className={classes.links}>
        <AppLink
          variant='body2'
          to={ROUTES.signIn}
          text={signUpMessages.signInLink}
        />
      </div>
      <AppCopyright className={classes.copy} />
    </div>
  );
});
