import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AccountDetails } from '../authentication/types';

type initialStateType = {
  userAccountData: AccountDetails | {};
};

const slices = createSlice({
  name: 'slicesAccount',
  initialState: {
    userAccountData: {},
  },
  reducers: {
    setUserAccountData(
      state: initialStateType,
      action: PayloadAction<AccountDetails | {}>,
    ) {
      state.userAccountData = action.payload;
    },
  },
});

export const slicesAccount = slices.reducer;
export const { setUserAccountData } = slices.actions;
