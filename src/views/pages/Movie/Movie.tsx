import React, { ReactElement, useEffect } from 'react';

import { NavLink, useNavigate, useParams } from 'react-router-dom';

import { PATHS } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { movieDetails } from '../../../store';
import { getActorsByMovieId } from '../../../store/features/actors/asyncThunk/actors';
import { selectActors } from '../../../store/features/actors/selectors';
import { selectMovie } from '../../../store/features/movie/selectors';
import { Card } from '../../components';

import styles from './movie.module.scss';

const Movie = (): ReactElement => {
  const movie = useAppSelector(selectMovie);
  const actors = useAppSelector(selectActors);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const backgroundStyles = {
    backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}'`,
  };

  const { id } = useParams();

  const getMovieDetails = (movieId: number): void => {
    dispatch(movieDetails(movieId));
    navigate(`${PATHS.MOVIE}/${movieId}`);
  };

  const date = movie.release_date ? new Date(movie.release_date) : null;
  const releaseYear = date?.getFullYear();
  const releaseDateFormat = date && movie.release_date.replace(/-/g, '/');

  function getTimeFromMins(): any {
    const hours = Math.trunc(movie.runtime / 60);
    const minutes = movie.runtime % 60;

    return `${hours}h ${minutes}m`;
  }

  const runTime = getTimeFromMins();

  useEffect(() => {
    dispatch(movieDetails(Number(id)));
    dispatch(getActorsByMovieId(Number(id)));
  }, []);

  return (
    <>
      <div style={backgroundStyles} className={styles.movie}>
        <div className={styles.movie__background}>
          <div className={`container ${styles.movie__content}`}>
            <div className={styles.movie__poster}>
              <img
                className={styles.movie__image}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className={styles.movie__info}>
              <div className={styles.movie__title}>
                <h2>
                  {movie.original_title}
                  <span> ({releaseYear})</span>
                </h2>
                <ul className={styles.facts}>
                  <li>{movie.release_date && releaseDateFormat}</li>
                  <li className={styles.content}>
                    {movie.genres &&
                      movie.genres.map(el => {
                        return (
                          <NavLink key={el.id} to={`${PATHS.MOVIE}/${movie.id}`}>
                            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
                            {el.name} <>,&nbsp;</>
                          </NavLink>
                        );
                      })}
                  </li>
                  <li className={styles.content}>{runTime}</li>
                </ul>
              </div>
              <div>
                <h3 className={styles.tagline}>{movie.tagline}</h3>
                <h3 className={styles.overview}>Overview</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`container ${styles.movie__content}`}>
          <h2 className={styles.title__actors}>Top Billed Cast</h2>
          <div className={styles.list}>
            {actors?.cast.map(cast => (
              <Card
                key={cast.id}
                id={cast.id}
                title={cast.name}
                path={cast.profile_path}
                onClickCard={getMovieDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Movie };
