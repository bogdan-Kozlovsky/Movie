import React from 'react';

import { PopularDescription } from '../../../store/features/popular/types';

import styles from './styles.module.scss';

interface CardProps<T> {
  card: T;
}

const Card = <T extends PopularDescription>({
  card,
}: CardProps<T>): React.ReactElement => {
  const { title, poster_path, release_date } = card;

  const date = new Date(release_date);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className={styles.card}>
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
