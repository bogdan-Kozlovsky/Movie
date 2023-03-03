import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MovieDetailsType } from '../search/types';

type initialStateType = {
  moviesData: MovieDetailsType;
};

const slices = createSlice({
  name: 'movie',
  initialState: {
    moviesData: {} as MovieDetailsType,
  },
  reducers: {
    setMovieDetails(state: initialStateType, action: PayloadAction<MovieDetailsType>) {
      state.moviesData = action.payload;
    },
  },
});

export const movie = slices.reducer;
export const { setMovieDetails } = slices.actions;
