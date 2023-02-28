import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import icon from '../../assets/icon/errorImage.svg';
import { Paginator } from '../../components/paginator/Paginator';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useDispatch';
import { searchMovies } from '../../store/features/search/asyncThunk/searchMovies';
import {
  selectMovies,
  selectMoviesPage,
  selectMoviesTotalPage,
  selectMoviesTotalResult,
} from '../../store/features/search/selectors';
import { setPage } from '../../store/features/search/slices';

import styles from './styles.module.scss';

const Search = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const movies = useAppSelector(selectMovies);
  const totalResult = useAppSelector(selectMoviesTotalResult);
  const totalPages = useAppSelector(selectMoviesTotalPage);
  const page = useAppSelector(selectMoviesPage);

  const onPageChange = (pageNumber: number): void => {
    dispatch(setPage(pageNumber));
  };

  useEffect(() => {
    dispatch(searchMovies({ query, page }));
  }, [page, query]);

  return (
    <section className={styles.search}>
      <aside>
        <button>Movies {totalResult}</button>
      </aside>

      <ul className={styles.search__list}>
        {movies.map(({ title, id, backdrop_path, release_date, overview }) => {
          return (
            <li key={id} className={styles.search__item}>
              <img
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${backdrop_path} `
                    : icon
                }
                alt="backdrop_pat"
              />
              <div className={styles.search__content}>
                <h3>{title}</h3>
                <span>{release_date}</span>
                <p>{overview}</p>
              </div>
            </li>
          );
        })}

        <Paginator page={page} onPageChange={onPageChange} totalPages={totalPages} />
      </ul>
    </section>
  );
};

export { Search };
