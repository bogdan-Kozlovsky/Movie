import { createAsyncThunk } from '@reduxjs/toolkit';

import { authenticationApi } from '../../../../utils/api/authentication/accountApi';

export type RequestBodyType = {
  username: string;
  password: string;
  request_token: string | null;
};

export const setUser = createAsyncThunk('setUser', async (body: RequestBodyType) => {
  const response = await authenticationApi.setUser(body);

  console.log(response.data);
});
