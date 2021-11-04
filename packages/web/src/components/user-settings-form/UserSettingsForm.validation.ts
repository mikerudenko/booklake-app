import {
  validationStrategy,
  validateConfirmPassword,
  EMAIL_STRATEGY,
} from '../../services/validation-service';

export interface UserSettingsFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
  avatar: File | string;
}
export const userSettingsFormValidationStrategy = validationStrategy<
  UserSettingsFormValues
>({
  email: EMAIL_STRATEGY,
  confirmPassword: [validateConfirmPassword],
});
