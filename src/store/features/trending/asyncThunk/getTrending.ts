import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { api } from '../../../../utils/api/api';
import { setTrending } from '../slices';
import { RootTrending } from '../types';

type paramsType = {
  mediaType: string;
  timeWindow: string;
};

export const getTrending = createAsyncThunk(
  'trending',
  async (params: paramsType, { dispatch }) => {
    const { mediaType, timeWindow } = params;
    const response: AxiosResponse<RootTrending> = await api.trending(
      mediaType,
      timeWindow,
    );

    dispatch(setTrending(response.data.results));
  },
);
