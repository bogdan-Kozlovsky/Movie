import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CollectionDetailsType, TvDetailsType } from '../types';

type initialStateType = {
  collectionData: CollectionDetailsType[] | [];
  page: number;
  totalResults: number;
  totalPages: number;
};

const slices = createSlice({
  name: 'slicesCollection',
  initialState: {
    collectionData: [],
    page: 1,
    totalResults: 0,
    totalPages: 0,
  },
  reducers: {
    setCollection(
      state: initialStateType,
      action: PayloadAction<CollectionDetailsType[] | []>,
    ) {
      state.collectionData = action.payload;
    },
    setPageCollection(state: initialStateType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalResultsCollection(state: initialStateType, action: PayloadAction<number>) {
      state.totalResults = action.payload;
    },
    setTotalPagesCollection(state: initialStateType, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const slicesCollection = slices.reducer;
export const {
  setCollection,
  setTotalResultsCollection,
  setTotalPagesCollection,
  setPageCollection,
} = slices.actions;
