import { instance } from '../config';

export const accountApi = {
  details() {
    return instance.get(`account`);
  },
};
