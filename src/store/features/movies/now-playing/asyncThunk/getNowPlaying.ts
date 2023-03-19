import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { moviesApi } from '../../../../../api/movies/moviesApi';
import { setNowPlaying, setPageNowPlaying, setTotalPagesNowPlaying } from '../slices';
import { RootNowPlaying } from '../types';

export const getNowPlaying = createAsyncThunk(
  'getNowPlaying',
  async (
    { languageValue, page }: { languageValue: string | null; page: number },
    { dispatch },
  ) => {
    const response: AxiosResponse<RootNowPlaying> = await moviesApi.nowPlaying(
      languageValue,
      page,
    );

    if (response.status >= 200 && response.status < 300) {
      dispatch(setNowPlaying(response.data));
      dispatch(setPageNowPlaying(response.data.page));
      dispatch(setTotalPagesNowPlaying(response.data.total_pages));
    }
  },
);
