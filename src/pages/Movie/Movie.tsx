import React, { ReactElement } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectMovie } from '../../store/features/movie/selectors';
import { selectTrending } from '../../store/features/trending/selectors';

import styles from './movie.module.scss';

const Movie = (): ReactElement => {
  console.log(1);
  const movie = useAppSelector(selectMovie);

  return (
    <div
      className={styles.image}
      // style={{
      //   // borderBottom: 1px solid var(--primaryColor);
      //   backgroundposition: left calc((50vw - 170px) - 340px) top;
      //   background-size: cover;
      //   background-repeat: no-repeat;
      //   backgroundImage: `url(
      //   'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')`,
      // }}
    >
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
