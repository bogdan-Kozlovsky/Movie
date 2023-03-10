import { useEffect, useState } from 'react';

import { instance } from '../api/config';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

export const useRandomMovieImage = (): Movie | null => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchRandomMovie = async (): Promise<void> => {
      const response = await instance.get(
        `movie/popular?api_key=75df7ca909e962c1330641811fad3003`,
      );
      const { results } = response.data;
      const randomMovie = results[Math.floor(Math.random() * results.length)];

      setMovie(randomMovie);
    };

    fetchRandomMovie();
  }, []);

  return movie;
};
