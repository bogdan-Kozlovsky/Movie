import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  randomPosterPath: string;
};

const slices = createSlice({
  name: 'global',
  initialState: {
    randomPosterPath: '',
  },
  reducers: {
    setRandomPosterPath(state: initialStateType, action: PayloadAction<string>) {
      state.randomPosterPath = action.payload;
    },
  },
});

export const global = slices.reducer;
export const { setRandomPosterPath } = slices.actions;
