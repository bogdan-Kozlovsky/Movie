import { RequestBodyType } from '../../../store/features/authentication/asyncThunk/setUser';
import { instance } from '../config';

export const authenticationApi = {
  token() {
    return instance.get(`authentication/token/new`);
  },
  setUser(body: RequestBodyType) {
    return instance.post(`authentication/token/validate_with_login`, body);
  },
};
