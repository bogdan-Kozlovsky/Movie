import { AppRootStateType } from '../../types';
import { AccountDetails } from '../authentication/types';

export const selectUserAccountData = (state: AppRootStateType): AccountDetails | {} =>
  state.slicesAccount.userAccountData;
