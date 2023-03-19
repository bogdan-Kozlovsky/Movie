import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { moviesApi } from '../../../../api/movies/moviesApi';
import { RootMovies } from '../../movies/types';
import { setPagePopular, setPopular, setTotalPagesPopular } from '../slices';

export const getPopular = createAsyncThunk(
  'getPopular',
  async (
    { languageValue, page }: { languageValue: string | null; page: number },
    { dispatch },
  ) => {
    const response: AxiosResponse<RootMovies> = await moviesApi.popular(
      languageValue,
      page,
    );

    if (response.status >= 200 && response.status < 300) {
      dispatch(setPopular(response.data));
      dispatch(setPagePopular(response.data.page));
      dispatch(setTotalPagesPopular(response.data.total_pages));
    }
  },
);
