import { AppRootStateType } from '../../types';

export const selectAppInitialized = (state: AppRootStateType): boolean =>
  state.global.initialized;
