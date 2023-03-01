import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { searchApi } from '../../../../utils/api/search/searchApi';
import { setPerson, setTotalPagesPerson, setTotalResultsPerson } from '../slices';
import { RootPersonType } from '../types';

type paramsType = {
  query: string | null;
  page: number;
};

export const searchPerson = createAsyncThunk(
  'searchPeople',
  async (params: paramsType, { dispatch }) => {
    const response: AxiosResponse<RootPersonType> = await searchApi.person(
      params.query,
      params.page,
    );

    dispatch(setPerson(response.data.results));
    dispatch(setTotalPagesPerson(response.data.total_pages));
    dispatch(setTotalResultsPerson(response.data.total_results));
  },
);
