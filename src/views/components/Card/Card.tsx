import React from 'react';

import styles from './styles.module.scss';

interface CardProps {
  title: string;
  path: string;
  release_date?: string;
  id: number;
  onClickCard: (id: number) => void;
}

const Card = (props: CardProps): React.ReactElement => {
  const { title, path, release_date, id, onClickCard } = props;

  const date = release_date ? new Date(release_date) : null;
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const formattedDate = date?.toLocaleDateString('en-US', options);

  return (
    <div className={styles.card} onClick={() => onClickCard(id)}>
      <img
        className={styles.card__img}
        src={`https://image.tmdb.org/t/p/w500/${path}`}
        alt={title}
      />
      <div className={styles.card__wrapper_content}>
        <h3 className={styles.card__name}>{title}</h3>
        {release_date && <span>{formattedDate}</span>}
      </div>
    </div>
  );
};

export { Card };
