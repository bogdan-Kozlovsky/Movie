import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AccountDetails } from '../authentication/types';

type initialStateType = {
  account: AccountDetails | null;
};
const slices = createSlice({
  name: 'account',
  initialState: {
    account: null,
  },
  reducers: {
    setAccount(state: initialStateType, action: PayloadAction<AccountDetails>) {
      state.account = action.payload;
    },
  },
});

export const account = slices.reducer;
export const { setAccount } = slices.actions;
