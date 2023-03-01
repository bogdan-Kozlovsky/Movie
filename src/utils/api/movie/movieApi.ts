import { instance } from '../config';

export const movieApi = {
  getMovieById(movieId: number) {
    return instance.get(`movie/${movieId}`);
  },
};
