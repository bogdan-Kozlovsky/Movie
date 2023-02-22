import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootLanguage } from './types';

type initialStateType = {
  selectedLanguageValue: string;
  selectedLanguages: RootLanguage[] | [];
};
const slices = createSlice({
  name: 'language',
  initialState: {
    selectedLanguageValue: 'en',
    selectedLanguages: [],
  },
  reducers: {
    setLanguageValue(state: initialStateType, action: PayloadAction<string>) {
      state.selectedLanguageValue = action.payload;
    },
    setLanguages(state: initialStateType, action: PayloadAction<RootLanguage[] | []>) {
      state.selectedLanguages = action.payload;
    },
  },
});

export const language = slices.reducer;
export const { setLanguageValue, setLanguages } = slices.actions;
