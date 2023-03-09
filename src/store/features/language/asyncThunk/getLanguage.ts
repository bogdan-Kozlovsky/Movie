import { createAsyncThunk } from '@reduxjs/toolkit';

import { languageApi } from '../../../../api';
import { setLanguages } from '../slices';

export const getLanguage = createAsyncThunk(
  'language',
  async (languageValue: string | null, { dispatch }) => {
    const response = await languageApi.language(languageValue);

    dispatch(setLanguages(response.data));
  },
);
