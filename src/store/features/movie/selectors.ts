import { AppRootStateType } from '../../types';
import { MovieDetailsType } from '../search/types';

export const selectMovie = (state: AppRootStateType): MovieDetailsType =>
  state.movie.moviesData;
