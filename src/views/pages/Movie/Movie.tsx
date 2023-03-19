import React, { ReactElement, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { movieDetails } from '../../../store';
import { selectMovie } from '../../../store/features/movie/selectors';

import styles from './movie.module.scss';

const Movie = (): ReactElement => {
  const movie = useAppSelector(selectMovie);
  const dispatch = useAppDispatch();
  const backgroundStyles = {
    backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}'`,
  };

  const { id } = useParams();

  useEffect(() => {
    dispatch(movieDetails(Number(id)));
  }, []);

  return (
    <div style={backgroundStyles} className={styles.movie}>
      <div className={styles.movie__background}>
        <div className={`container ${styles.movie__content}`}>
          <img
            className={styles.movie__image}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.original_title}</h1>
          <div>
            <span>{movie.release_date}</span>
            <span>{movie.runtime}</span>
          </div>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export { Movie };
