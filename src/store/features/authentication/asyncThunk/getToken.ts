import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { authenticationApi } from '../../../../utils/api/authentication/accountApi';
import { GetTokenResponseType } from '../types';

export const getToken = createAsyncThunk('getToken', async (_, { dispatch }) => {
  const response: AxiosResponse<GetTokenResponseType> = await authenticationApi.token();

  localStorage.setItem('requestToken', response.data.request_token);
});
