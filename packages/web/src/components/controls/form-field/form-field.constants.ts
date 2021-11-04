import { FormFieldText } from '../form-field-text';
import { FormSelect } from '../form-select';
import { FormChips } from '../form-chips';

export type FormFieldType = 'text' | 'email' | 'password';

export const FormFields = {
  text: FormFieldText,
  email: FormFieldText,
  password: FormFieldText,
  select: FormSelect,
  chips: FormChips,
};
