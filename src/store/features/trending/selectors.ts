import { AppRootStateType } from '../../types';

import { TrendingResult } from './types';

export const selectTrending = (state: AppRootStateType): TrendingResult[] | [] =>
  state.trending.trendingData;

export const selectMediaType = (state: AppRootStateType): string =>
  state.trending.mediaType;

export const selectTimeWindow = (state: AppRootStateType): string =>
  state.trending.timeWindow;
