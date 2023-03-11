import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootPopular } from './types';

type initialStateType = {
  popular: RootPopular | null;
  page: number;
  totalPages: number;
};

const slices = createSlice({
  name: 'popular',
  initialState: {
    popular: null,
    page: 1,
    totalPages: 0,
  },
  reducers: {
    setPopular(state: initialStateType, action: PayloadAction<RootPopular>) {
      state.popular = action.payload;
    },
    setPagePopular(state: initialStateType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalPagesPopular(state: initialStateType, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const popular = slices.reducer;
export const { setPopular, setPagePopular, setTotalPagesPopular } = slices.actions;
