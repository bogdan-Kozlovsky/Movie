import { RequestBodyType } from '../../store/features/authentication/asyncThunk/setLoginUser';
import { instance } from '../config';

const authenticationApi = {
  fetchToken() {
    return instance.get(`authentication/token/new`);
  },
  loginUser(body: RequestBodyType) {
    return instance.post(`authentication/token/validate_with_login`, body);
  },
  createSession(token: string) {
    return instance.post(`/authentication/session/new`, { request_token: token });
  },
};

export { authenticationApi };
