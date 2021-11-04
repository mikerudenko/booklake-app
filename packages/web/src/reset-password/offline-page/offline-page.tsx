import React, { memo } from 'react';
import { AppContainer } from '../components/app-container';

// TODO add offline page
export const OfflinePage = memo(() => {
  return (
    <AppContainer>
      <div>You are offline now</div>
    </AppContainer>
  );
});
