import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';

import { AppContainer } from '../components/app-container';
import { placesSelectionMessages } from './places-selection.messages';
import { usePlacesSelectionLogic } from './use-places-selection-logic';
import { AppLoader } from '../components/app-loader';
import { selectLakeTranslations } from '../services/helper-service';
import { PlacesSelectionInfo } from './places-selection-info';

export const PlacesSelection = memo(() => {
  const { formatMessage } = useIntl();
  const {
    currentLake,
    placesSelectionLoading,
    locale,
  } = usePlacesSelectionLogic();

  if (placesSelectionLoading || !currentLake) {
    return <AppLoader />;
  }

  const { translations } = currentLake;
  const { address, title } = selectLakeTranslations(translations, locale);

  return (
    <DocumentTitle title={formatMessage(placesSelectionMessages.pageTitle)}>
      <AppContainer>
        <PlacesSelectionInfo {...{ title, address }} />
      </AppContainer>
    </DocumentTitle>
  );
});
