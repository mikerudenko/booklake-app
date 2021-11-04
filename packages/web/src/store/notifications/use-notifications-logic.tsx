import { useRef, useCallback, useEffect, SyntheticEvent } from 'react';
import { useSnackbar } from 'notistack';
import { useIntl } from 'react-intl';
import noop from 'lodash/noop';

import { useNotificationsConnect } from './use-notifications-connect';

export const useNotificationsLogic = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { notifications, removeSnackbar } = useNotificationsConnect();
  const { formatMessage } = useIntl();
  const displayedRef = useRef<string[]>([]);

  const storeDisplayed = useCallback(id => {
    displayedRef.current = [...displayedRef.current, id];
  }, []);

  const removeDisplayed = useCallback(id => {
    displayedRef.current = displayedRef.current.filter(key => id !== key);
  }, []);

  const onExited = useCallback(
    (event: SyntheticEvent, key: string) => {
      removeSnackbar(key);
      removeDisplayed(key);
    },
    [removeDisplayed, removeSnackbar],
  );

  useEffect(() => {
    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }: any) => {
        if (dismissed) {
          closeSnackbar(key);
          return;
        }

        if (displayedRef.current.includes(key)) {
          return;
        }

        const finalMessage =
          typeof message === 'string' ? message : formatMessage(message);

        enqueueSnackbar(finalMessage, {
          key,
          ...options,
          vertical: 'top',
          horizontal: 'right',
          // @ts-ignore
          onClose: options.onClose || noop,
          onExited,
        } as any);
        storeDisplayed(key);
      },
    );
  }, [
    notifications,
    closeSnackbar,
    enqueueSnackbar,
    formatMessage,
    onExited,
    storeDisplayed,
  ]);
};
