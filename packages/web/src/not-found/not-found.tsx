import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';

import { AppContainer } from '../components/app-container';
import StatusImage from './assets/404.svg';
import FishingRod from './assets/fishing-rod.svg';
import { useNotFoundStyles } from './use-not-found-styles';
import { notFoundMessages } from './not-found.messages';

export const NotFound = memo(() => {
  const { formatMessage } = useIntl();
  const classes = useNotFoundStyles();
  return (
    <DocumentTitle title={formatMessage(notFoundMessages.pageTitle)}>
      <AppContainer containerClass={classes.container}>
        <h2 className={classes.title}>
          {formatMessage(notFoundMessages.title)}
        </h2>
        <div className={classes.imageContainer}>
          <img src={StatusImage} alt='404' className={classes.status} />
          <img
            src={FishingRod}
            alt='Page in not found'
            className={classes.fishingRod}
          />
        </div>
        <p className={classes.description}>
          {formatMessage(notFoundMessages.description)}
        </p>
      </AppContainer>
    </DocumentTitle>
  );
});
