import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { searchApi } from '../../../../api';
import { setKeywords, setTotalPagesKeywords, setTotalResultsKeywords } from '../slices';
import { RootTvType } from '../types';

type paramsType = {
  query: string | null;
  page: number;
};

export const searchKeywords = createAsyncThunk(
  'searchKeywords',
  async (params: paramsType, { dispatch }) => {
    const response: AxiosResponse<RootTvType> = await searchApi.keyword(
      params.query,
      params.page,
    );

    dispatch(setKeywords(response.data.results));
    dispatch(setTotalPagesKeywords(response.data.total_pages));
    dispatch(setTotalResultsKeywords(response.data.total_results));
  },
);
