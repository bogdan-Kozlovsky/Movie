import { AppRootStateType } from '../../types';

import { RootPopular } from './types';

const selectPopular = (state: AppRootStateType): RootPopular | null =>
  state.popular.popular;
const selectPagePopular = (state: AppRootStateType): number => state.popular.page;
const selectTotalPagesPopular = (state: AppRootStateType): number =>
  state.popular.totalPages;

export { selectPagePopular, selectPopular, selectTotalPagesPopular };
