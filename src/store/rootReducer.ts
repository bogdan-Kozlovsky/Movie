import { combineReducers } from '@reduxjs/toolkit';

import {
  slicesCollection,
  slicesMovies,
  slicesPerson,
  slicesTv,
  slicesCompanies,
  slicesKeywords,
} from './features';
import { global } from './features/global/slices';
import { language } from './features/language/slices';
import { trending } from './features/trending/slices';

export const rootReducer = combineReducers({
  trending,
  language,
  global,
  slicesMovies,
  slicesPerson,
  slicesTv,
  slicesCollection,
  slicesCompanies,
  slicesKeywords,
});
