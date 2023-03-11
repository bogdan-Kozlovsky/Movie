import { instance } from '../config';

const popularApi = {
  popular(languageValue: string | null, page: number) {
    return instance.get(`movie/popular?language=${languageValue}&page=${page}`);
  },
};

export { popularApi };
