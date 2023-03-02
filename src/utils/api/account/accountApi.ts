import { instance } from '../config';

export const accountApi = {
  getAccountDetails(sessionId: string) {
    return instance.get(`account?session_id=${sessionId}`);
  },
};
