import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AccountDetails } from '../authentication/types';

type initialStateType = {
  account: AccountDetails | null;
  isLoginUser: boolean;
};
const slices = createSlice({
  name: 'account',
  initialState: {
    account: null,
    isLoginUser: false,
  },
  reducers: {
    setAccount(state: initialStateType, action: PayloadAction<AccountDetails>) {
      state.account = action.payload;
    },
    setIsLoginUser(state, action: PayloadAction<boolean>) {
      state.isLoginUser = action.payload;
    },
  },
});

export const account = slices.reducer;
export const { setAccount, setIsLoginUser } = slices.actions;
