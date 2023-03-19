import React from 'react';

import { useNavigate } from 'react-router-dom';

import { PATHS } from '../../../enums';
import { useAppDispatch } from '../../../hooks';
import { movieDetails } from '../../../store';
import { MovieDescription } from '../../../store/features/movies/types';

import styles from './styles.module.scss';

interface CardProps<T> {
  card: T;
}

const Card = <T extends MovieDescription>({ card }: CardProps<T>): React.ReactElement => {
  const { title, poster_path, release_date, id } = card;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const date = new Date(release_date);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  const getMovieDetails = (movieId: number): void => {
    dispatch(movieDetails(movieId));
    navigate(`${PATHS.MOVIE}/${movieId}`);
  };

  return (
    <div className={styles.card} onClick={() => getMovieDetails(id)}>
      <img
        className={styles.card__img}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
      />
      <div className={styles.card__wrapper_content}>
        <h3 className={styles.card__name}>{title}</h3>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export { Card };
