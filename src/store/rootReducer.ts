import { combineReducers } from '@reduxjs/toolkit';

import { slicesPerson, slicesTv } from './features';
import { global } from './features/global/slices';
import { language } from './features/language/slices';
import { slicesCollection } from './features/search/slices/slicesCollection';
import { slicesMovies } from './features/search/slices/slicesMovies';
import { trending } from './features/trending/slices';

export const rootReducer = combineReducers({
  trending,
  language,
  global,
  slicesMovies,
  slicesPerson,
  slicesTv,
  slicesCollection,
});
