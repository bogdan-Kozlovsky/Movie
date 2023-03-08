import { createAsyncThunk } from '@reduxjs/toolkit';

import { authenticationApi } from '../../../../api';

export const logoutAccount = createAsyncThunk(
  'logoutAccount',
  async (sessionId: string) => {
    await authenticationApi.logoutAccount(sessionId);

    localStorage.removeItem('session_id');
  },
);
