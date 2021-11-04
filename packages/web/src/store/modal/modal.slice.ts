import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const ModalSlice = createSlice({
  name: 'modal',
  initialState: {
    list: {} as Record<string, boolean>,
  },
  reducers: {
    ShowModal: (state, action: PayloadAction<string>) => {
      state.list[action.payload] = true;
    },
    HideModal: (state, action: PayloadAction<string>) => {
      state.list[action.payload] = false;
    },
  },
});
