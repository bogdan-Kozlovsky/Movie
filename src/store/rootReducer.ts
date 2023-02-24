import { combineReducers } from '@reduxjs/toolkit';

import { global } from './features/global/slices';
import { language } from './features/language/slices';
import { trending } from './features/trending/slices';

export const rootReducer = combineReducers({
  trending,
  language,
  global,
});
