import { instance } from '../config';

const accountApi = {
  getAccountDetails(sessionId: string) {
    return instance.get(`account?session_id=${sessionId}`);
  },
};

export { accountApi };
