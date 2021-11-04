import Container from '@material-ui/core/Container';
import React, { memo, useEffect, useMemo } from 'react';
import DocumentTitle from 'react-document-title';
import { useIntl } from 'react-intl';
import { META_THUNK } from '../app.constants';
import { AppContainer } from '../components/app-container';
import { LakesGrid } from '../components/lakes-grid';
import { useLakesConnect } from '../store/lakes';
import { LakesSlider } from './lakes-slider';
import { lakesMessages } from './lakes.messages';
import { useLakesStyles } from './use-lakes-styles';

export const Lakes = memo(() => {
  const { formatMessage } = useIntl();
  const { lakesNetworkStatus, lakes, GetLakeListRequest } = useLakesConnect();
  const classes = useLakesStyles();
  const lakesArray = Object.values(lakes);
  const lakesForSlider = useMemo(
    () => lakesArray.filter(({ showInSlider }) => showInSlider),
    [lakesArray],
  );

  useEffect(() => {
    GetLakeListRequest({}, META_THUNK);
  }, [GetLakeListRequest]);

  return (
    <DocumentTitle title={formatMessage(lakesMessages.pageTitle)}>
      <AppContainer hasCustomContainer>
        {lakesForSlider.length > 3 && (
          <LakesSlider
            {...{
              lakesNetworkStatus,
              lakes: lakesForSlider,
            }}
          />
        )}
        <Container maxWidth='lg' className={classes.container}>
          <LakesGrid {...{ lakesNetworkStatus, lakes: lakesArray }} />
        </Container>
      </AppContainer>
    </DocumentTitle>
  );
});
