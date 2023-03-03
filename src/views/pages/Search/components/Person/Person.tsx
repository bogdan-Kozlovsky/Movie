import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import iconPerson from '../../../../../assets/icon/personIcon.svg';
import { useAppSelector, useAppDispatch } from '../../../../../hooks';
import { searchPerson, setPagePerson } from '../../../../../store';
import {
  selectPerson,
  selectPersonPage,
  selectPersonTotalPage,
  selectPersonTotalResult,
} from '../../../../../store/features/search/selectors';
import { Paginator } from '../../../../components';

import styles from './styles.module.scss';

const Person = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const person = useAppSelector(selectPerson);
  const totalResult = useAppSelector(selectPersonTotalResult);
  const totalPages = useAppSelector(selectPersonTotalPage);
  const page = useAppSelector(selectPersonPage);

  const onPageChange = (pageNumber: number): void => {
    dispatch(setPagePerson(pageNumber));
  };

  useEffect(() => {
    dispatch(searchPerson({ query, page }));
  }, [page, query]);

  return (
    <ul>
      {person.map(({ id, name, profile_path }) => {
        return (
          <li className={styles.person__item} key={id}>
            <img
              className={styles.person__img}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path} `
                  : iconPerson
              }
              alt="backdrop_pat"
            />
            <div>
              <h3>{name}</h3>
            </div>
          </li>
        );
      })}
      <Paginator page={page} onPageChange={onPageChange} totalPages={totalPages} />
    </ul>
  );
};

export { Person };
