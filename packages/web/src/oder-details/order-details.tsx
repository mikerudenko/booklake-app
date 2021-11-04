import React, { useCallback, memo } from 'react';
import DocumentTitle from 'react-document-title';
import { useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';

import { AppContainer } from '../components/app-container';
import { orderDetailsMessages } from './order-details.messages';
import { createOrderRequest } from '../api/api.order';

export const OrderDetails = memo(() => {
  const { formatMessage } = useIntl();

  const onCreateOrderClick = useCallback(() => {
    const mockOrder = {};

    createOrderRequest(mockOrder);
  }, []);

  return (
    <DocumentTitle title={formatMessage(orderDetailsMessages.pageTitle)}>
      <AppContainer>
        <Button onClick={onCreateOrderClick}>Create order</Button>
      </AppContainer>
    </DocumentTitle>
  );
});
