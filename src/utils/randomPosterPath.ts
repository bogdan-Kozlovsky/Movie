import { TrendingResult } from '../store/features/trending/types';

const randomPosterPath = (movies: TrendingResult[]): string => {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return randomMovie.poster_path;
};

export { randomPosterPath };
