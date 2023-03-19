import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootNowPlaying } from './types';

type initialStateType = {
  nowPlaying: RootNowPlaying | null;
  page: number;
  totalPages: number;
};

const slices = createSlice({
  name: 'nowPlaying',
  initialState: {
    nowPlaying: null,
    page: 1,
    totalPages: 0,
  },
  reducers: {
    setNowPlaying(state: initialStateType, action: PayloadAction<RootNowPlaying>) {
      state.nowPlaying = action.payload;
    },
    setPageNowPlaying(state: initialStateType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalPagesNowPlaying(state: initialStateType, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const nowPlaying = slices.reducer;
export const { setTotalPagesNowPlaying, setPageNowPlaying, setNowPlaying } =
  slices.actions;
