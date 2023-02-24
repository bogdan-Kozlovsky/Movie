import { createAsyncThunk } from '@reduxjs/toolkit';

import { accountApi } from '../../../../utils/api/account/accountApi';

export const getAccount = createAsyncThunk('language', async (_, { dispatch }) => {
  const response = await accountApi.details();

  // eslint-disable-next-line no-debugger
  debugger;
  console.log(response.data);
  // dispatch(setLanguages(response.data));
});
