import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { accountApi } from '../../../../api';
import { setIsLoginUser } from '../../authentication/slices';
import { AccountDetails } from '../../authentication/types';

export const getAccount = createAsyncThunk(
  'getAccount',
  async (sessionId: string, { dispatch }) => {
    const response: AxiosResponse<AccountDetails> = await accountApi.getAccountDetails(
      sessionId,
    );

    if (response.status >= 200 && response.status < 300) {
      dispatch(setIsLoginUser(true));
    } else {
      dispatch(setIsLoginUser(false));
    }

    console.log(response);
  },
);
