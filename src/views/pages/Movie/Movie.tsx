import React, { ReactElement } from 'react';

import { useAppSelector } from '../../../hooks';
import { selectMovie } from '../../../store/features/movie/selectors';

import styles from './movie.module.scss';

const Movie = (): ReactElement => {
  const movie = useAppSelector(selectMovie);

  return (
    <div className={styles.image}>
      <img
        style={{ objectFit: 'cover', height: '300px' }}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h1>{movie.original_title}</h1>
      <div>
        <span>{movie.release_date}</span>
        {/* <span>{movie.genres.map(g => g.name)}</span> */}
        <span>{movie.runtime}</span>
      </div>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
    </div>
  );
};

export { Movie };
