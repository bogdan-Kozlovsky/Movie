import { AppRootStateType } from '../../types';

import {
  CollectionDetailsType,
  KeywordsDetailsType,
  MovieDetailsType,
  PersonDetailsType,
  TvDetailsType,
} from './types';

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

// tv
export const selectTv = (state: AppRootStateType): TvDetailsType[] | [] =>
  state.slicesTv.TvData;
export const selectTvTotalResult = (state: AppRootStateType): number =>
  state.slicesTv.totalResults;
export const selectTvPage = (state: AppRootStateType): number => state.slicesTv.page;
export const selectTvTotalPage = (state: AppRootStateType): number =>
  state.slicesTv.totalPages;

// collection
export const selectCollection = (state: AppRootStateType): CollectionDetailsType[] | [] =>
  state.slicesCollection.collectionData;
export const selectCollectionTotalResult = (state: AppRootStateType): number =>
  state.slicesCollection.totalResults;
export const selectCollectionPage = (state: AppRootStateType): number =>
  state.slicesCollection.page;
export const selectCollectionTotalPage = (state: AppRootStateType): number =>
  state.slicesCollection.totalPages;

// companies
export const selectCompanies = (state: AppRootStateType): CollectionDetailsType[] | [] =>
  state.slicesCompanies.companiesData;
export const selectCompaniesTotalResult = (state: AppRootStateType): number =>
  state.slicesCompanies.totalResults;
export const selectCompaniesPage = (state: AppRootStateType): number =>
  state.slicesCompanies.page;
export const selectCompaniesTotalPage = (state: AppRootStateType): number =>
  state.slicesCompanies.totalPages;

// keywords
export const selectKeywords = (state: AppRootStateType): KeywordsDetailsType[] | [] =>
  state.slicesKeywords.keywordsData;
export const selectKeywordsTotalResult = (state: AppRootStateType): number =>
  state.slicesKeywords.totalResults;
export const selectKeywordsPage = (state: AppRootStateType): number =>
  state.slicesKeywords.page;
export const selectKeywordsTotalPage = (state: AppRootStateType): number =>
  state.slicesKeywords.totalPages;
