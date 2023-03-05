import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { PATHS } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { movieDetails, getTrending } from '../../../store';
import { selectLanguageValue } from '../../../store/features/language/selectors';
import {
  selectMediaType,
  selectTimeWindow,
  selectTrending,
} from '../../../store/features/trending/selectors';
import { Banner, Selector, TrendingButton } from '../../components';

const Home = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const movies = useAppSelector(selectTrending);
  const mediaType = useAppSelector(selectMediaType);
  const timeWindow = useAppSelector(selectTimeWindow);
  const selectedLanguage = useAppSelector(selectLanguageValue);

  const getMovieDetails = (movieId: number): void => {
    dispatch(movieDetails(movieId));
    navigate(`${PATHS.MOVIE}/${movieId}`);
  };

  useEffect(() => {
    dispatch(getTrending({ mediaType, timeWindow, languageValue: selectedLanguage }));
  }, [timeWindow, mediaType, selectedLanguage]);

  return (
    <div>
      <div className="container">
        <Banner />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ marginRight: '15px' }}>У тренді</h1>
          <Selector />
          <TrendingButton />
        </div>
        <ul style={{ display: 'flex', overflowX: 'scroll' }}>
          {movies.map(movie => (
            <li key={movie.id} style={{ width: '33%', margin: '10px' }}>
              {/* <NavLink to={`/movie/${movie.id}`}> */}
              <img
                style={{ objectFit: 'cover', height: '200px' }}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <button onClick={() => getMovieDetails(movie.id)}>Movie</button>
              <h2>{movie.title || movie.name}</h2>
              {/* </NavLink> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Home };