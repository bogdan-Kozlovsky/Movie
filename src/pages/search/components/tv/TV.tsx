import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import icon from '../../../../assets/icon/errorImage.svg';
import { Paginator } from '../../../../components/paginator/Paginator';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../hooks/useDispatch';
import { searchTv, setPageTv } from '../../../../store';
import {
  selectTv,
  selectTvPage,
  selectTvTotalPage,
  selectTvTotalResult,
} from '../../../../store/features/search/selectors';

import styles from './styles.module.scss';

const TV = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const tv = useAppSelector(selectTv);
  const totalResult = useAppSelector(selectTvTotalResult);
  const totalPages = useAppSelector(selectTvTotalPage);
  const page = useAppSelector(selectTvPage);

  const onPageChange = (pageNumber: number): void => {
    dispatch(setPageTv(pageNumber));
  };

  useEffect(() => {
    dispatch(searchTv({ query, page }));
  }, [page, query]);

  return (
    <ul>
      {tv.map(({ id, poster_path, overview, name }) => {
        return (
          <li key={id} className={styles.tv__item}>
            <img
              src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path} ` : icon}
              alt="backdrop_pat"
            />
            <div className={styles.tv__content}>
              <h3>{name}</h3>
              <span>{poster_path}</span>
              <p>{overview}</p>
            </div>
          </li>
        );
      })}

      <Paginator page={page} onPageChange={onPageChange} totalPages={totalPages} />
    </ul>
  );
};

export { TV };
