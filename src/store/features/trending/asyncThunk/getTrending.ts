import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { trendingApi } from '../../../../utils/api/trending/trendingApi';
import { setTrending } from '../slices';
import { RootTrending } from '../types';

type paramsType = {
  mediaType: string;
  timeWindow: string;
  languageValue: string;
};

export const getTrending = createAsyncThunk(
  'trending',
  async (params: paramsType, { dispatch }) => {
    const { mediaType, timeWindow, languageValue } = params;
    const response: AxiosResponse<RootTrending> = await trendingApi.trending(
      mediaType,
      timeWindow,
      languageValue,
    );

    dispatch(setTrending(response.data.results));
  },
);
