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
  popular,
  nowPlaying,
} from './features';
import { actors } from './features/actors/slices';
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
  popular,
  nowPlaying,
  actors,
});
