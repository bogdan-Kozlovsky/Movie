import React, { ReactElement } from 'react';

import { useAppSelector } from '../../../hooks';
import { selectMovie } from '../../../store/features/movie/selectors';

import styles from './movie.module.scss';

const Movie = (): ReactElement => {
  const movie = useAppSelector(selectMovie);

  const backgroundStyles = {
    backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}'`,
  };

  return (
    <div style={backgroundStyles} className={styles.movie}>
      <div className={styles.movie__background}>
        <div className="container">
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
