import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  isLoginUser: boolean;
};
const slices = createSlice({
  name: 'authentication',
  initialState: {
    isLoginUser: false,
  },
  reducers: {
    setIsLoginUser(state: initialStateType, action: PayloadAction<boolean>) {
      state.isLoginUser = action.payload;
    },
  },
});

export const slicesAuthentication = slices.reducer;
export const { setIsLoginUser } = slices.actions;
