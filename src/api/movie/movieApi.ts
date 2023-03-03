import { instance } from '../config';

const movieApi = {
  getMovieById(movieId: number) {
    return instance.get(`movie/${movieId}`);
  },
};

export { movieApi };
