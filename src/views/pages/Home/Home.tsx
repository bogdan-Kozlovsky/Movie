import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { PATHS } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { createSessionUser, getAccount, getTrending, movieDetails } from '../../../store';
import { getActorsByMovieId } from '../../../store/features/actors/asyncThunk/actors';
import { selectLanguageValue } from '../../../store/features/language/selectors';
import {
  selectMediaType,
  selectTimeWindow,
  selectTrending,
} from '../../../store/features/trending/selectors';
import { Banner, Card, Selector } from '../../components';

import style from './home.module.scss';

const Home = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectTrending);
  const mediaType = useAppSelector(selectMediaType);
  const timeWindow = useAppSelector(selectTimeWindow);
  const selectedLanguage = useAppSelector(selectLanguageValue);

  const getMovieDetails = (movieId: number): void => {
    dispatch(getActorsByMovieId(movieId));
    dispatch(movieDetails(movieId));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const sessionId = localStorage.getItem('session_id');

    if (sessionId) {
      dispatch(getAccount(sessionId));
    } else if (token) {
      dispatch(createSessionUser(token));
    }
  }, []);

  useEffect(() => {
    dispatch(getTrending({ mediaType, timeWindow, languageValue: selectedLanguage }));
  }, [timeWindow, mediaType, selectedLanguage]);

  return (
    <div>
      <Banner />
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={{ marginRight: '15px' }}>Trending</h2>
          <Selector />
          {/* <TrendingButton /> */}
        </div>
        <div className={style.cards}>
          {movies.map(movie => (
            <NavLink to={`${PATHS.MOVIE}/${movie.id}`} key={movie.id}>
              <Card
                id={movie.id}
                title={movie.title}
                path={movie.poster_path}
                onClickCard={getMovieDetails}
                release_date={movie.release_date}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Home };
