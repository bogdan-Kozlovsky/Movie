import { createAsyncThunk } from '@reduxjs/toolkit';

import { languageApi } from '../../../../utils/api/language/languageApi';
import { setLanguages } from '../slices';

export const getLanguage = createAsyncThunk(
  'language',
  async (languageValue: string, { dispatch }) => {
    const response = await languageApi.language(languageValue);

    dispatch(setLanguages(response.data));
  },
);
