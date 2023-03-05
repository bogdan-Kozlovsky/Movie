import { AccountDetails } from '../../../store/features/authentication/types';
import { instance } from '../config';

export const accountApi = {
  getAccountDetails(sessionId: string) {
    return instance.get<AccountDetails>(`account?session_id=${sessionId}`);
  },
};
