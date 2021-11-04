import noop from 'lodash/noop';
import { MetaThunk } from '../app.types';

export const prepareAction = <T>(
  payload: T,
  meta?: any & MetaThunk,
  error?: boolean,
) => ({
  payload,
  meta,
  error,
});

export const noopAction = {
  reducer: noop,
  prepare: prepareAction,
};
