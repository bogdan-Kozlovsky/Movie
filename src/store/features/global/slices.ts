import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  initialized: boolean;
};
const slices = createSlice({
  name: 'global',
  initialState: {
    initialized: false,
  },
  reducers: {
    setInitialized(state: initialStateType, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
  },
});

export const global = slices.reducer;
export const { setInitialized } = slices.actions;
