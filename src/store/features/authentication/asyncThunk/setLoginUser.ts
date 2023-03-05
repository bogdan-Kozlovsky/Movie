import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { authenticationApi } from '../../../../utils/api/authentication/accountApi';
import { setIsLoginUser } from '../slices';
import { AuthenticationTokenNewResponse } from '../types';

import { createSessionUser } from './createSessionUser';

export type RequestBodyType = {
  username: string;
  password: string;
  request_token: string | null;
};

export const setLoginUser = createAsyncThunk(
  'setLoginUser',
  async (body: RequestBodyType, { dispatch }) => {
    const response: AxiosResponse<AuthenticationTokenNewResponse> =
      await authenticationApi.loginUser(body);

    if (response.data.success) {
      dispatch(setIsLoginUser(true));
      dispatch(createSessionUser(response.data.request_token));
    }
  },
);
