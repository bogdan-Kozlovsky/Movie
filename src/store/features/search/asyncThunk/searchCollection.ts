import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { searchApi } from '../../../../api';
import {
  setCollection,
  setTotalPagesCollection,
  setTotalResultsCollection,
} from '../slices';
import { RootCollectionType } from '../types';

type paramsType = {
  query: string | null;
  page: number;
};

export const searchCollection = createAsyncThunk(
  'searchCollection',
  async (params: paramsType, { dispatch }) => {
    const response: AxiosResponse<RootCollectionType> = await searchApi.collection(
      params.query,
      params.page,
    );

    dispatch(setCollection(response.data.results));
    dispatch(setTotalPagesCollection(response.data.total_pages));
    dispatch(setTotalResultsCollection(response.data.total_results));
  },
);
