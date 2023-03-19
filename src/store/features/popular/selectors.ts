import { AppRootStateType } from '../../types';
import { RootMovies } from '../movies/types';

const selectPopular = (state: AppRootStateType): RootMovies | null =>
  state.popular.popular;
const selectPagePopular = (state: AppRootStateType): number => state.popular.page;
const selectTotalPagesPopular = (state: AppRootStateType): number =>
  state.popular.totalPages;

export { selectPagePopular, selectPopular, selectTotalPagesPopular };
