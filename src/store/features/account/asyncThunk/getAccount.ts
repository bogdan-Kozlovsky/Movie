import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { accountApi } from '../../../../api';
import { AccountDetails } from '../../authentication/types';

export const getAccount = createAsyncThunk(
  'getAccount',
  async (sessionId: string, { dispatch }) => {
    const response: AxiosResponse<AccountDetails> = await accountApi.getAccountDetails(
      sessionId,
    );
  },
);
