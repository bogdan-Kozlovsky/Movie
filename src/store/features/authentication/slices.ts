import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {};
const slices = createSlice({
  name: 'account',
  initialState: {},
  reducers: {
    // setDetailsAccount(state: initialStateType, action: PayloadAction<any>) {
    //   state.selectedLanguageValue = action.payload;
    // },
  },
});

export const account = slices.reducer;
export const {} = slices.actions;
