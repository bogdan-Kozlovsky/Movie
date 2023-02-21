import { combineReducers } from '@reduxjs/toolkit';

import { trending } from './features/trending/slices';

export const rootReducer = combineReducers({
  trending,
});
