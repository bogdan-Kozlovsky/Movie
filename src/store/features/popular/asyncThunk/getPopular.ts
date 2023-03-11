import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { popularApi } from '../../../../api/popular/popularApi';
import { setPagePopular, setPopular, setTotalPagesPopular } from '../slices';
import { RootPopular } from '../types';

export const getPopular = createAsyncThunk(
  'getPopular',
  async (
    { languageValue, page }: { languageValue: string | null; page: number },
    { dispatch },
  ) => {
    const response: AxiosResponse<RootPopular> = await popularApi.popular(
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
