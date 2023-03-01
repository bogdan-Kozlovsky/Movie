import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Paginator } from '../../../../components/paginator/Paginator';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../hooks/useDispatch';
import { searchKeywords, setPageKeywords } from '../../../../store';
import {
  selectKeywords,
  selectKeywordsPage,
  selectKeywordsTotalPage,
  selectKeywordsTotalResult,
} from '../../../../store/features/search/selectors';

import styles from './styles.module.scss';

const Keywords = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const keywords = useAppSelector(selectKeywords);
  const totalResult = useAppSelector(selectKeywordsTotalResult);
  const totalPages = useAppSelector(selectKeywordsTotalPage);
  const page = useAppSelector(selectKeywordsPage);

  const onPageChange = (pageNumber: number): void => {
    dispatch(setPageKeywords(pageNumber));
  };

  useEffect(() => {
    dispatch(searchKeywords({ query, page }));
  }, [page, query]);

  return (
    <ul>
      {keywords.map(({ id, name }) => {
        return (
          <li key={id} className={styles.tv__item}>
            <div className={styles.tv__content}>
              <h3>{name}</h3>
            </div>
          </li>
        );
      })}

      <Paginator page={page} onPageChange={onPageChange} totalPages={totalPages} />
    </ul>
  );
};

export { Keywords };
