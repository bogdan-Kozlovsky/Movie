import { AppRootStateType } from '../../types';

import { MovieDetailsType } from './types';

export const selectMovies = (state: AppRootStateType): MovieDetailsType[] | [] =>
  state.search.moviesData;

export const selectMoviesTotalResult = (state: AppRootStateType): number =>
  state.search.totalResults;

export const selectMoviesPage = (state: AppRootStateType): number => state.search.page;
export const selectMoviesTotalPage = (state: AppRootStateType): number =>
  state.search.totalPages;
