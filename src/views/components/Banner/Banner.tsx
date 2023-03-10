import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { PATHS } from '../../../enums';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { useRandomMovieImage } from '../../../hooks/useRandomMovieImage';
import { searchMovies } from '../../../store';
import { selectMoviesPage } from '../../../store/features/search/selectors';

import styles from './styles.module.scss';

const Banner = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState<string>('');

  const page = useAppSelector(selectMoviesPage);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(`${PATHS.SEARCH}?query=${value}`);
    dispatch(searchMovies({ query: value, page }));
  };

  const randomPath = useRandomMovieImage();

  const backgroundStyles = {
    backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${randomPath?.poster_path}'`,
  };

  return (
    <section style={backgroundStyles} className={styles.banner}>
      <div>
        <h1>Welcome.</h1>
        <h2>Millions of movies, series and people. Explore now.</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={event => setValue(event.currentTarget.value)}
          type="text"
          placeholder="Пошук фільму, серіалу, людини..."
        />
        <button>Search</button>
      </form>
    </section>
  );
};

export { Banner };
