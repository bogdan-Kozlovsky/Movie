import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { searchApi } from '../../../../api';
import { setTotalPagesTv, setTotalResultsTv, setTv } from '../slices';
import { RootTvType } from '../types';

type paramsType = {
  query: string | null;
  page: number;
};

export const searchTv = createAsyncThunk(
  'searchTv',
  async (params: paramsType, { dispatch }) => {
    const response: AxiosResponse<RootTvType> = await searchApi.tv(
      params.query,
      params.page,
    );

    dispatch(setTv(response.data.results));
    dispatch(setTotalPagesTv(response.data.total_pages));
    dispatch(setTotalResultsTv(response.data.total_results));
  },
);
