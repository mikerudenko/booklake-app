import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCALE } from '@booklake/core/dist/i18n';

export type LocateState = {
  locale: LOCALE;
};

export const I18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    locale: LOCALE.En,
  },
  reducers: {
    ChangeLocale: (state, action: PayloadAction<LOCALE>) => {
      state.locale = action.payload;
    },
  },
});
