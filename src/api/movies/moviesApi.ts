import { instance } from '../config';

const moviesApi = {
  popular(languageValue: string | null, page: number) {
    return instance.get(`movie/popular?language=${languageValue}&page=${page}`);
  },
  nowPlaying(languageValue: string | null, page: number) {
    return instance.get(`/movie/now_playing?language=${languageValue}&page=${page}`);
  },
};

export { moviesApi };
