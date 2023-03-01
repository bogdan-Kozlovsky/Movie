import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { KeywordsDetailsType } from '../types';

type initialStateType = {
  keywordsData: KeywordsDetailsType[] | [];
  page: number;
  totalResults: number;
  totalPages: number;
};

const slices = createSlice({
  name: 'slicesKeywords',
  initialState: {
    keywordsData: [],
    page: 1,
    totalResults: 0,
    totalPages: 0,
  },
  reducers: {
    setKeywords(
      state: initialStateType,
      action: PayloadAction<KeywordsDetailsType[] | []>,
    ) {
      state.keywordsData = action.payload;
    },
    setPageKeywords(state: initialStateType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalResultsKeywords(state: initialStateType, action: PayloadAction<number>) {
      state.totalResults = action.payload;
    },
    setTotalPagesKeywords(state: initialStateType, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const slicesKeywords = slices.reducer;
export const {
  setKeywords,
  setTotalResultsKeywords,
  setTotalPagesKeywords,
  setPageKeywords,
} = slices.actions;
