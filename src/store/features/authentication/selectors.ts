import { AppRootStateType } from '../../types';

export const selectSetIsLoginUser = (state: AppRootStateType): boolean =>
  state.slicesAuthentication.isLoginUser;
