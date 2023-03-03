import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import icon from '../../../../../assets/icon/errorImage.svg';
import { useAppSelector, useAppDispatch } from '../../../../../hooks';
import { searchCollection, setPageCollection } from '../../../../../store';
import {
  selectCollection,
  selectCollectionPage,
  selectCollectionTotalPage,
  selectCollectionTotalResult,
} from '../../../../../store/features/search/selectors';
import { Paginator } from '../../../../components';

import styles from './styles.module.scss';

const Collection = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const collection = useAppSelector(selectCollection);
  const totalResult = useAppSelector(selectCollectionTotalResult);
  const totalPages = useAppSelector(selectCollectionTotalPage);
  const page = useAppSelector(selectCollectionPage);

  const onPageChange = (pageNumber: number): void => {
    dispatch(setPageCollection(pageNumber));
  };

  useEffect(() => {
    dispatch(searchCollection({ query, page }));
  }, [page, query]);

  return (
    <ul>
      {collection.map(({ id, poster_path, overview, name }) => {
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

export { Collection };
