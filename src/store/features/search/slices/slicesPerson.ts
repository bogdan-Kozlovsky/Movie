import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PersonDetailsType } from '../types';

type initialStateType = {
  personData: PersonDetailsType[] | [];
  page: number;
  totalResults: number;
  totalPages: number;
};

const slices = createSlice({
  name: 'slicesPerson',
  initialState: {
    personData: [],
    page: 1,
    totalResults: 0,
    totalPages: 0,
  },
  reducers: {
    setPerson(state: initialStateType, action: PayloadAction<PersonDetailsType[] | []>) {
      state.personData = action.payload;
    },
    setPagePerson(state: initialStateType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalResultsPerson(state: initialStateType, action: PayloadAction<number>) {
      state.totalResults = action.payload;
    },
    setTotalPagesPerson(state: initialStateType, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const slicesPerson = slices.reducer;
export const { setPerson, setPagePerson, setTotalPagesPerson, setTotalResultsPerson } =
  slices.actions;
