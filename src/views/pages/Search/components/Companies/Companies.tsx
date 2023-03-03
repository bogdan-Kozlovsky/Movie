import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import icon from '../../../../../assets/icon/errorImage.svg';
import { useAppSelector, useAppDispatch } from '../../../../../hooks';
import { searchCompanies } from '../../../../../store';
import { setPageCompanies } from '../../../../../store/features';
import {
  selectCompanies,
  selectCompaniesPage,
  selectCompaniesTotalPage,
  selectCompaniesTotalResult,
} from '../../../../../store/features/search/selectors';
import { Paginator } from '../../../../components';

import styles from './styles.module.scss';

const Companies = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const companies = useAppSelector(selectCompanies);
  const totalResult = useAppSelector(selectCompaniesTotalResult);
  const totalPages = useAppSelector(selectCompaniesTotalPage);
  const page = useAppSelector(selectCompaniesPage);

  const onPageChange = (pageNumber: number): void => {
    dispatch(setPageCompanies(pageNumber));
  };

  useEffect(() => {
    dispatch(searchCompanies({ query, page }));
  }, [page, query]);

  return (
    <ul>
      {companies.map(({ id, poster_path, overview, name }) => {
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
              <p>{overview}</p>
            </div>
          </li>
        );
      })}

      <Paginator page={page} onPageChange={onPageChange} totalPages={totalPages} />
    </ul>
  );
};

export { Companies };
