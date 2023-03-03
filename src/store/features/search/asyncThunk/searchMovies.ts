import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { searchApi } from '../../../../api';
import { setMovies, setTotalPagesMovies, setTotalResultsMovies } from '../slices';
import { RootMoviesType } from '../types';

type paramsType = {
  query: string | null;
  page: number;
};
export const searchMovies = createAsyncThunk(
  'searchMovies',
  async (params: paramsType, { dispatch }) => {
    const response: AxiosResponse<RootMoviesType> = await searchApi.movies(
      params.query,
      params.page,
    );

    dispatch(setMovies(response.data.results));
    dispatch(setTotalPagesMovies(response.data.total_pages));
    dispatch(setTotalResultsMovies(response.data.total_results));
  },
);
