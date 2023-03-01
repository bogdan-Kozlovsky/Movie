import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CollectionDetailsType, CompaniesDetailsType } from '../types';

type initialStateType = {
  companiesData: CompaniesDetailsType[] | [];
  page: number;
  totalResults: number;
  totalPages: number;
};

const slices = createSlice({
  name: 'slicesCompanies',
  initialState: {
    companiesData: [],
    page: 1,
    totalResults: 0,
    totalPages: 0,
  },
  reducers: {
    setCompanies(
      state: initialStateType,
      action: PayloadAction<CompaniesDetailsType[] | []>,
    ) {
      state.companiesData = action.payload;
    },
    setPageCompanies(state: initialStateType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalResultsCompanies(state: initialStateType, action: PayloadAction<number>) {
      state.totalResults = action.payload;
    },
    setTotalPagesCompanies(state: initialStateType, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const slicesCompanies = slices.reducer;
export const {
  setCompanies,
  setTotalResultsCompanies,
  setTotalPagesCompanies,
  setPageCompanies,
} = slices.actions;
