import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import * as Sentry from '@sentry/browser';

import { App } from './app';
import * as serviceWorker from './serviceWorker';

serviceWorker.register();

configure().then(() =>
  ReactDOM.render(<App />, document.getElementById('root')),
);

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_URL });


async function configure(): Promise<void> {
  await configureIntl();
}

async function configureIntl(): Promise<void> {
  if (!global.Intl) {
    await import('intl');
    await import('intl/locale-data/jsonp/en.js');
  }
}
