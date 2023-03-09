import { combineReducers } from '@reduxjs/toolkit';

import {
  slicesCollection,
  slicesMovies,
  slicesPerson,
  slicesTv,
  slicesCompanies,
  slicesKeywords,
  account,
  slicesAuthentication,
  movie,
  trending,
  language,
} from './features';
import { global } from './features/global/slices';

export const rootReducer = combineReducers({
  trending,
  slicesAuthentication,
  language,
  global,
  movie,
  account,
  slicesMovies,
  slicesPerson,
  slicesTv,
  slicesCollection,
  slicesCompanies,
  slicesKeywords,
});
