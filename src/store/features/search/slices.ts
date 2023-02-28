import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MovieDetailsType } from './types';

type initialStateType = {
  moviesData: MovieDetailsType[] | [];
  page: number;
  totalResults: number;
  totalPages: number;
};

const slices = createSlice({
  name: 'search',
  initialState: {
    moviesData: [],
    page: 1,
    totalResults: 0,
    totalPages: 0,
  },
  reducers: {
    setMovies(state: initialStateType, action: PayloadAction<MovieDetailsType[] | []>) {
      state.moviesData = action.payload;
    },
    setPage(state: initialStateType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalResults(state: initialStateType, action: PayloadAction<number>) {
      state.totalResults = action.payload;
    },
    setTotalPages(state: initialStateType, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const search = slices.reducer;
export const { setMovies, setPage, setTotalResults, setTotalPages } = slices.actions;
