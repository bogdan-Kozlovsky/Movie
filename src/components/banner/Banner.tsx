import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useDispatch';
import { searchMovies } from '../../store/features/search/asyncThunk/searchMovies';
import { selectMoviesPage } from '../../store/features/search/selectors';
import { PATHS } from '../../utils/enum';

import styles from './styles.module.scss';

const Banner = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState<any>('');

  const page = useAppSelector(selectMoviesPage);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    navigate(`${PATHS.SEARCH}?query=${value}`);
    dispatch(searchMovies({ query: value, page }));
  };

  // const urls = [
  //   'https://api.themoviedb.org/3/movie/popular?api_key=75df7ca909e962c1330641811fad3003',
  //   'https://api.themoviedb.org/3/movie/top_rated?api_key=75df7ca909e962c1330641811fad3003',
  //   'https://api.themoviedb.org/3/movie/upcoming?api_key=75df7ca909e962c1330641811fad3003',
  //   'https://api.themoviedb.org/3/tv/popular?api_key=75df7ca909e962c1330641811fad3003',
  //   'https://api.themoviedb.org/3/tv/top_rated?api_key=75df7ca909e962c1330641811fad3003',
  //   'https://api.themoviedb.org/3/tv/on_the_air?api_key=75df7ca909e962c1330641811fad3003',
  //   'https://api.themoviedb.org/3/tv/airing_today?api_key=75df7ca909e962c1330641811fad3003',
  // ];
  //
  // async function fetchData(): Promise<void> {
  //   try {
  //     const requests = urls.map(url => instance.get(url));
  //     const responses = await Promise.all(requests);
  //     const data = responses.map(response => response.data);
  //
  //     console.log(data); // Вивести дані, що повернув сервер
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  //
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <section className={styles.banner}>
      <h1>Welcome.</h1>
      <h2>Millions of movies, series and people. Explore now.</h2>
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

export default Banner;
