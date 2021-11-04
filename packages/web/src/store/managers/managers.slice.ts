import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../auth';
import { NetworkStatus } from '../../store-utils';

export const ManagersSlice = createSlice({
  name: 'managers',
  initialState: {
    managers: {
      data: [] as User[],
      networkStatus: NetworkStatus.None,
    },
  },
  reducers: {
    GetManagersListRequest: state => {
      state.managers.networkStatus = NetworkStatus.Request;
    },
    GetManagersListSuccess: (state, action: PayloadAction<User[]>) => {
      state.managers.data = action.payload;
      state.managers.networkStatus = NetworkStatus.Success;
    },
    GetManagersListError: state => {
      state.managers.networkStatus = NetworkStatus.Error;
    },
  },
});
