import React, { memo, useCallback } from 'react';
import { useIntl } from 'react-intl';
import Tooltip from '@material-ui/core/Tooltip';
import c from 'classnames';

import { LOCALE_SELECT_LIST, useI18nConnect } from '../../../../store/i18n';
import { useLanguageTalesListStyles } from './useLanguageTalesListStyles';

export const LanguageTaleList = memo(() => {
  const { formatMessage } = useIntl();
  const { locale, ChangeLocale } = useI18nConnect();
  const classes = useLanguageTalesListStyles();
  const onLocaleClick = useCallback(
    (event: any) => {
      ChangeLocale(event.target.dataset.value);
    },
    [ChangeLocale],
  );

  return (
    <div className={classes.tales}>
      {LOCALE_SELECT_LIST.map(({ label, value }, key) => (
        <Tooltip title={formatMessage(label)} key={key}>
          <div
            className={c(classes.languageTale, {
              [classes.selected]: locale === value,
            })}
            data-value={value}
            onClick={onLocaleClick}
          >
            {value}
          </div>
        </Tooltip>
      ))}
    </div>
  );
});
