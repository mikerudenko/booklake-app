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
import { signInMessages } from './sign-in.messages';
import { validationResolver } from './sign-in.validation';
import { useSignInLogic } from './use-sign-in-logic';
import { useSignInStyles } from './use-sign-in-styles';

export const SignIn = memo(() => {
  const {
    onSubmit,
    onSignInWithGoogleClick,
    onSignInWithFacebookClick,
  } = useSignInLogic();
  const classes = useSignInStyles();

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
        <AppSubmitButton color='primary' text={globalMessages.signIn} />
      </AppForm>

      <div className={classes.socialButtons}>
        <AppAuthButton onClick={onSignInWithGoogleClick} type='google' />
        <AppAuthButton onClick={onSignInWithFacebookClick} type='facebook' />
      </div>
      <div className={classes.links}>
        <AppLink
          variant='body2'
          to={ROUTES.forgotPassword}
          text={signInMessages.forgotPassword}
        />
        <AppLink
          variant='body2'
          to={ROUTES.signUp}
          text={signInMessages.signUpLink}
        />
      </div>
      <AppCopyright className={classes.copy} />
    </div>
  );
});
