import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MovieDetailsType } from '../types';

type initialStateType = {
  moviesData: MovieDetailsType[] | [];
  page: number;
  totalResults: number;
  totalPages: number;
};

const slices = createSlice({
  name: 'slicesMovies',
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
    setPageMovies(state: initialStateType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalResultsMovies(state: initialStateType, action: PayloadAction<number>) {
      state.totalResults = action.payload;
    },
    setTotalPagesMovies(state: initialStateType, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const slicesMovies = slices.reducer;
export const { setMovies, setPageMovies, setTotalPagesMovies, setTotalResultsMovies } =
  slices.actions;
