import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { authenticationApi } from '../../../../utils/api/authentication/accountApi';
import { AuthenticationTokenNewResponse } from '../types';

export const getToken = createAsyncThunk('getToken', async (_, { dispatch }) => {
  const response: AxiosResponse<AuthenticationTokenNewResponse> = await authenticationApi.fetchToken();

  localStorage.setItem('requestToken', response.data.request_token);
});
