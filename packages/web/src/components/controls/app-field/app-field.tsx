import React from 'react';
import { Field } from 'react-final-form';
import { AppNumberField } from '../app-number-field';
import { AppCheckboxField } from '../app-checkbox-field';
import { AppDatePickerField } from '../app-datepicker-field';
import {
  AppImageSingleDropzone,
  AppImageArrayDropzone,
} from '../app-image-dropzone';
import { AppMaskField } from '../app-mask-field';

const Components = {
  number: AppNumberField,
  checkbox: AppCheckboxField,
  datepicker: AppDatePickerField,
  imageDropzoneSingle: AppImageSingleDropzone,
  imageDropzoneArray: AppImageArrayDropzone,
  mask: AppMaskField,
};

interface AppFieldProps extends Record<string, any> {
  name: string;
  type: keyof typeof Components;
}

export const AppField = ({ type, ...otherProps }: AppFieldProps) => {
  const Component = Components[type];

  return <Field type={type} {...otherProps} component={Component as any} />;
};
