import { AppRootStateType } from '../../types';

import { MovieDetailsType, PersonDetailsType } from './types';

// movies
export const selectMovies = (state: AppRootStateType): MovieDetailsType[] | [] =>
  state.slicesMovies.moviesData;

export const selectMoviesTotalResult = (state: AppRootStateType): number =>
  state.slicesMovies.totalResults;

export const selectMoviesPage = (state: AppRootStateType): number =>
  state.slicesMovies.page;
export const selectMoviesTotalPage = (state: AppRootStateType): number =>
  state.slicesMovies.totalPages;

// person
export const selectPerson = (state: AppRootStateType): PersonDetailsType[] | [] =>
  state.slicesPerson.personData;

export const selectPersonTotalResult = (state: AppRootStateType): number =>
  state.slicesPerson.totalResults;

export const selectPersonPage = (state: AppRootStateType): number =>
  state.slicesPerson.page;
export const selectPersonTotalPage = (state: AppRootStateType): number =>
  state.slicesPerson.totalPages;
