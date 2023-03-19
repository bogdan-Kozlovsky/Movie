import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getPopular, setPagePopular } from '../../../../store';
import { selectLanguageValue } from '../../../../store/features/language/selectors';
import { MovieDescription } from '../../../../store/features/movies/types';
import {
  selectPagePopular,
  selectPopular,
  selectTotalPagesPopular,
} from '../../../../store/features/popular/selectors';
import { Card, Paginator } from '../../../components';

import styles from './styles.module.scss';

const Popular = (): React.ReactElement => {
  const selectedLanguage = useAppSelector(selectLanguageValue);
  const popular = useAppSelector(selectPopular);
  const page = useAppSelector(selectPagePopular);
  const totalPages = useAppSelector(selectTotalPagesPopular);

  const dispatch = useAppDispatch();

  const onPageChanged = (pageNumber: number): void => {
    dispatch(setPagePopular(pageNumber));
  };

  useEffect(() => {
    dispatch(getPopular({ languageValue: selectedLanguage, page }));
  }, [selectedLanguage, page]);

  return (
    <div className="container">
      <div className={styles.list}>
        {popular?.results.map(card => (
          <Card<MovieDescription>
            key={card.id}
            card={{
              ...card,
            }}
          />
        ))}
      </div>
      <Paginator page={page} totalPages={totalPages} onPageChange={onPageChanged} />
    </div>
  );
};

export { Popular };
