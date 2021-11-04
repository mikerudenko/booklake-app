import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';

import { AppContainer } from '../components/app-container';
import { advancedSearchMessages } from './advanced-search.messages';
import { useLakesConnect } from '../store/lakes';
import { useAdvancedSearchStyles } from './use-advanced-search-styles';
import { LakesGrid } from '../components/lakes-grid';
import { SearchFilters } from './search-filters';

export const AdvancedSearch = memo(() => {
  const { formatMessage } = useIntl();
  const { lakesNetworkStatus, lakes } = useLakesConnect();
  const classes = useAdvancedSearchStyles();
  const lakesArray = Object.values(lakes);

  return (
    <DocumentTitle title={formatMessage(advancedSearchMessages.pageTitle)}>
      <AppContainer containerClass={classes.container}>
        <SearchFilters />
        <LakesGrid {...{ lakesNetworkStatus, lakes: lakesArray }} />
      </AppContainer>
    </DocumentTitle>
  );
});
