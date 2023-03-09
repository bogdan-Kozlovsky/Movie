import { AppRootStateType } from '../../types';
import { AccountDetails } from '../authentication/types';

export const selectAccount = (state: AppRootStateType): AccountDetails | null =>
  state.account.account;
