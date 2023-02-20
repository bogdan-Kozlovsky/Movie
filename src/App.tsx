import React, { useEffect, useState } from 'react';

import axios from 'axios';

import TrendingButton from './components/TrendingButton';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const API_KEY = '75df7ca909e962c1330641811fad3003';
// const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const App = (): React.ReactElement => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [value, setValue] = useState('all');

  useEffect(() => {
    const fetchMovies = async (): Promise<void> => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/${value}/day?api_key=${API_KEY}&page=2`,
        );

        console.log(response.data);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [value]);

  return (
    <div>
      <TrendingButton setValue={setValue} />
      <h1>Popular Movies</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <li key={movie.id} style={{ width: '50%' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
