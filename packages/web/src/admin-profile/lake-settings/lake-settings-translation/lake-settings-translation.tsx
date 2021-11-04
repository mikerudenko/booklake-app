import React, { memo, useCallback } from 'react';

import { lakeSettingsMessages } from '../lake-settings.messages';
import { useLakeSettingsTranslationStyles } from './use-lake-settings-translation-styles';
import { globalMessages, LOCALE_SELECT_LIST } from '../../../store/i18n';
import { AppField } from '../../../components/controls/app-field';
import { AppRemoveButton } from '../../../components/app-button/app-remove-button';

interface LakeSettingsTranslationProps {
  name: string;
  index: number;
  remove(index: number): void;
}

export const LakeSettingsTranslation = memo(
  ({ remove, name, index }: LakeSettingsTranslationProps) => {
    const onRemoveClick = useCallback(() => {
      remove(index);
    }, [index, remove]);
    const classes = useLakeSettingsTranslationStyles();

    return (
      <div className={classes.wrapper}>
        <div className={classes.locale}>
          <AppField
            name={`${name}.locale`}
            required
            options={LOCALE_SELECT_LIST}
            label={globalMessages.language}
            type='select'
          />
        </div>
        <div className={classes.translationsBlock}>
          <AppField
            name={`${name}.title`}
            type='text'
            required
            label={lakeSettingsMessages.title}
            className={classes.title}
          />
          <AppRemoveButton onClick={onRemoveClick} />
          <AppField
            name={`${name}.description`}
            type='text'
            required
            isMultiple
            rows='4'
            label={lakeSettingsMessages.description}
            className={classes.description}
          />
          <AppField
            name={`${name}.address`}
            type='text'
            required
            isMultiple
            rows='4'
            label={globalMessages.address}
            className={classes.address}
          />
        </div>
      </div>
    );
  },
);
