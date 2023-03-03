import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { movieApi } from '../../../../api';
import { MovieDetailsType } from '../../search/types';
import { setMovieDetails } from '../slices';

export const movieDetails = createAsyncThunk(
  'movieDetails',
  async (movieId: number, { dispatch }) => {
    const response: AxiosResponse<MovieDetailsType> = await movieApi.getMovieById(
      movieId,
    );

    dispatch(setMovieDetails(response.data));
  },
);
