import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TvDetailsType } from '../types';

type initialStateType = {
  TvData: TvDetailsType[] | [];
  page: number;
  totalResults: number;
  totalPages: number;
};

const slices = createSlice({
  name: 'slicesTv',
  initialState: {
    TvData: [],
    page: 1,
    totalResults: 0,
    totalPages: 0,
  },
  reducers: {
    setTv(state: initialStateType, action: PayloadAction<TvDetailsType[] | []>) {
      state.TvData = action.payload;
    },
    setPageTv(state: initialStateType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalResultsTv(state: initialStateType, action: PayloadAction<number>) {
      state.totalResults = action.payload;
    },
    setTotalPagesTv(state: initialStateType, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const slicesTv = slices.reducer;
export const { setTv, setTotalPagesTv, setTotalResultsTv, setPageTv } = slices.actions;
