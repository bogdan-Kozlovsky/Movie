import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TrendingResult } from './types';

type initialStateType = {
  trendingData: TrendingResult[] | [];
  mediaType: string;
  timeWindow: string;
};

const slices = createSlice({
  name: 'trending',
  initialState: {
    trendingData: [],
    mediaType: 'all',
    timeWindow: 'day',
  },
  reducers: {
    setTrending(state: initialStateType, action: PayloadAction<TrendingResult[] | []>) {
      state.trendingData = action.payload;
    },
    setMediaType(state: initialStateType, action: PayloadAction<string>) {
      state.mediaType = action.payload;
    },
    setTimeWindow(state: initialStateType, action: PayloadAction<string>) {
      state.timeWindow = action.payload;
    },
  },
});

export const trending = slices.reducer;
export const { setTrending, setMediaType, setTimeWindow } = slices.actions;
