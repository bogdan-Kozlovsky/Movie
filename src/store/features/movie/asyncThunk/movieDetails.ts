import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { movieApi } from '../../../../utils/api/movie/movieApi';
import { MovieDetailsType } from '../../search/types';
import { setMovieDetails } from '../slices';

// type paramsType = {
//   query: string | null;
//   page: number;
// };
export const movieDetails = createAsyncThunk(
  'movieDetails',
  async (movieId: number, { dispatch }) => {
    const response: AxiosResponse<MovieDetailsType> = await movieApi.getMovieById(
      movieId,
    );

    console.log(response.data);
    dispatch(setMovieDetails(response.data));
    // dispatch(setTotalPages(response.data.total_pages));
    // dispatch(setTotalResults(response.data.total_results));
  },
);
