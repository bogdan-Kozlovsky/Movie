import { instance } from '../config';

const authenticationApi = {
  fetchToken() {
    return instance.get(`authentication/token/new`);
  },
  createSession(token: string) {
    return instance.post(`/authentication/session/new`, { request_token: token });
  },
  logoutAccount(sessionId: string) {
    return instance.delete(`/authentication/session?session_id=${sessionId}`);
  },
};

export { authenticationApi };
