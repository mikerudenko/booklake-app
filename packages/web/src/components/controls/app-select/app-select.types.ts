import { MessageDescriptor } from 'react-intl';
import { Dictionary } from '../../../services/helper-service';
import { ChangeEvent, ReactNode } from 'react';

export type AppSelectOptionType = {
  value: string;
  label: MessageDescriptor;
};

export type AppSelectProps = {
  name: string;
  label: MessageDescriptor;
  options: AppSelectOptionType[];
  labelValues?: Dictionary<number | string>;
  required?: boolean;
  className?: string;
  onChange: (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: ReactNode,
  ) => void;
  showError?: boolean;
  error?: string;
  register?: any;
  value?: string | number | string[];
};
