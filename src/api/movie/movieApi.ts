import { instance } from '../config';

const movieApi = {
  getMovieById(movieId: number | undefined) {
    return instance.get(`movie/${movieId}`);
  },
};

export { movieApi };
