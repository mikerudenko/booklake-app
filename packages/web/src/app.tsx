import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { memo } from 'react';
import { jssPreset, StylesProvider } from '@material-ui/styles';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import jssTemplate from 'jss-plugin-template';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ConnectedRouter } from 'connected-react-router';

import { PersistGate } from 'redux-persist/integration/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AppTheme } from './app.constants';
import { TranslationProvider } from './translation-provider';
import { configureStore } from './store';
import { Root } from './root';
export const history = createBrowserHistory();

const jss = create({
  plugins: [jssTemplate(), ...jssPreset().plugins],
});
const theme = createMuiTheme(AppTheme);
const { store, persistor } = configureStore(history);

export const App = memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <SnackbarProvider>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <PersistGate persistor={persistor}>
                <TranslationProvider>
                  <Root />
                </TranslationProvider>
              </PersistGate>
            </ConnectedRouter>
          </Provider>
        </SnackbarProvider>
      </StylesProvider>
    </ThemeProvider>
  );
});
