import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getPopular, setPagePopular } from '../../../store';
import { selectLanguageValue } from '../../../store/features/language/selectors';
import {
  selectPagePopular,
  selectPopular,
  selectTotalPagesPopular,
} from '../../../store/features/popular/selectors';
import { PopularDescription } from '../../../store/features/popular/types';
import { Card, Paginator } from '../../components';

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
    <>
      <div className={styles.list}>
        {popular?.results.map(card => (
          <Card<PopularDescription>
            key={card.id}
            card={{
              ...card,
            }}
          />
        ))}
      </div>
      <Paginator page={page} totalPages={totalPages} onPageChange={onPageChanged} />
    </>
  );
};

export { Popular };
