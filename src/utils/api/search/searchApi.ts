import { instance } from '../config';

export const searchApi = {
  movies(query: string | null, page: number) {
    return instance.get(`search/movie?query=${query}&page=${page}`);
  },
  collection(query: string) {
    return instance.get(`search/collection?query=${query}`);
  },
  keyword(query: string) {
    return instance.get(`search/keyword?query=${query}`);
  },
  company(query: string) {
    return instance.get(`search/company?query=${query}`);
  },
  person(query: string | null, page: number) {
    return instance.get(`search/person?query=${query}&page=${page}`);
  },
  tv(query: string) {
    return instance.get(`search/tv?query=${query}`);
  },
};
