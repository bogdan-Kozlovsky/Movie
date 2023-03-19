import { AppRootStateType } from '../../../types';

import { RootNowPlaying } from './types';

const selectNowPlaying = (state: AppRootStateType): RootNowPlaying | null =>
  state.nowPlaying.nowPlaying;
const selectPageNowPlaying = (state: AppRootStateType): number => state.nowPlaying.page;
const selectTotalPagesNowPlaying = (state: AppRootStateType): number =>
  state.nowPlaying.totalPages;

export { selectTotalPagesNowPlaying, selectNowPlaying, selectPageNowPlaying };
