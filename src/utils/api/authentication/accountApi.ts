import { RequestBodyType } from '../../../store/features/authentication/asyncThunk/setLoginUser';
import { instance } from '../config';

export const authenticationApi = {
  token() {
    return instance.get(`authentication/token/new`);
  },
  setUser(body: RequestBodyType) {
    return instance.post(`authentication/token/validate_with_login`, body);
  },
};
