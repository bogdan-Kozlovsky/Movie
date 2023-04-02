import React, { ReactElement, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

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

  useEffect(() => {
    dispatch(movieDetails(Number(id)));
    dispatch(getActorsByMovieId(Number(id)));
  }, []);

  return (
    <>
      <div style={backgroundStyles} className={styles.movie}>
        <div className={styles.movie__background}>
          <div className={`container ${styles.movie__content}`}>
            <img
              className={styles.movie__image}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={styles.movie__info}>
              <div>
                <h2>{movie.original_title}</h2>
                <span>{movie.release_date}</span>
                <span>{movie.revenue}</span>
              </div>
              <div>
                <h3>Overview</h3>
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
