import React, { useCallback, memo, useMemo } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { MessageDescriptor } from 'react-intl';

import { useLakeSettingsLogic } from './useLakeSettingsLogic';
import { globalMessages } from '../../store/i18n';

import { useLakeSettingsStyles } from './useLakeSettingsStyles';
import { LakeSettingsTranslationArray } from './lake-settings-translation-array';
import { LakeSettingsContacts } from './lake-settings-contacts';
import { LakeSettingsSensitiveData } from './lake-settings-sensitive-data';
import { lakeSettingsValidationStrategy } from './lake-settings.validation';
import { LakeSettingsFishingArray } from './lake-settings-fishing-array';
import { lakeSettingsDecorator } from './lake-settings-decorator';
import { LakeSettingsImages } from './lake-settings-images';
import { LakeSettingsPlaceArray } from './lake-settings-place-array';
import { lakeSettingsMessages } from './lake-settings.messages';
import { LakeSettingsOptionArray } from './lake-settings-option-array';
import { LakeSettingsValues } from '../../store/lakes';
import { AppSubmitButton } from '../../components/app-button/app-submit-button';
import { AppTabs } from '../../components/app-tabs';

export interface LakeSettingsProps {
  initialValues: Partial<LakeSettingsValues>;
  submitText: MessageDescriptor;
}

export const LakeSettings = memo(
  ({ initialValues, submitText }: LakeSettingsProps) => {
    const {
      managersSelectList,
      managersLoading,
      onSubmit,
    } = useLakeSettingsLogic();
    const classes = useLakeSettingsStyles();

    const renderFormContent = useCallback(
      (formState) => {
        const {
          handleSubmit,
          form: {
            mutators: { push },
          },
          values: {
            contacts: { country },
          },
          managersSelectList,
        } = formState;

        const lakeSettingsTabs = useMemo(
          () => [
            {
              label: lakeSettingsMessages.translations,
              component: LakeSettingsTranslationArray,
              componentProps: { push },
            },
            {
              label: lakeSettingsMessages.sensitiveData,
              component: LakeSettingsSensitiveData,
              componentProps: { managersSelectList, managersLoading },
            },
            {
              label: lakeSettingsMessages.contacts,
              component: LakeSettingsContacts,
              componentProps: { country },
            },
            {
              label: lakeSettingsMessages.images,
              component: LakeSettingsImages,
            },
            {
              label: globalMessages.fishing,
              labelValues: { quantity: 2 },
              component: LakeSettingsFishingArray,
              componentProps: { push },
            },
            {
              label: globalMessages.option,
              labelValues: { quantity: 2 },
              component: LakeSettingsOptionArray,
              componentProps: { push },
            },
            {
              label: globalMessages.place,
              labelValues: { quantity: 2 },
              component: LakeSettingsPlaceArray,
              componentProps: { push },
            },
          ],
          [country, managersSelectList, push],
        );

        return (
          <form onSubmit={handleSubmit} className={classes.form}>
            <AppTabs tabs={lakeSettingsTabs} />

            <AppSubmitButton
              className={classes.submit}
              variant='outlined'
              color='primary'
              text={submitText}
            />
          </form>
        );
      },
      [submitText, classes.form, classes.submit, managersLoading],
    );

    return (
      <Form<any>
        mutators={arrayMutators as any}
        {...{
          decorators: [lakeSettingsDecorator],
          render: renderFormContent,
          managersSelectList,
          initialValues,
          onSubmit,
          validate: lakeSettingsValidationStrategy,
        }}
      />
    );
  },
);
