import { instance } from './config';

export const api = {
  trending(mediaType: string, timeWindow: string) {
    return instance.get(`trending/${mediaType}/${timeWindow}`);
  },
};
