import { AppRootStateType } from '../../types';

export const selectRandomPosterPath = (state: AppRootStateType): string =>
  state.global.randomPosterPath;
