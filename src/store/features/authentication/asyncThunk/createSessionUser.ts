import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { authenticationApi } from '../../../../api';
import { getAccount } from '../../account/asyncThunk/getAccount';
import { AuthenticationSessionNewResponse } from '../types';

export const createSessionUser = createAsyncThunk(
  'createSessionUser',
  async (token: string, { dispatch }) => {
    const { data }: AxiosResponse<AuthenticationSessionNewResponse> =
      await authenticationApi.createSession(token);

    if (data.success) {
      dispatch(getAccount(data.session_id));
    }
  },
);
