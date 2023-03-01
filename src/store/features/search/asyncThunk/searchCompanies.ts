import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { searchApi } from '../../../../utils/api/search/searchApi';
import {
  setCompanies,
  setTotalPagesCompanies,
  setTotalResultsCompanies,
} from '../slices';
import { RootCollectionType, RootCompaniesType } from '../types';

type paramsType = {
  query: string | null;
  page: number;
};

export const searchCompanies = createAsyncThunk(
  'searchCompanies',
  async (params: paramsType, { dispatch }) => {
    const response: AxiosResponse<RootCompaniesType> = await searchApi.company(
      params.query,
      params.page,
    );

    dispatch(setCompanies(response.data.results));
    dispatch(setTotalPagesCompanies(response.data.total_pages));
    dispatch(setTotalResultsCompanies(response.data.total_results));
  },
);
