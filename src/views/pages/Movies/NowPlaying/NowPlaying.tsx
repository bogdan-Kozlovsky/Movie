import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getNowPlaying, setPageNowPlaying, setPagePopular } from '../../../../store';
import { selectLanguageValue } from '../../../../store/features/language/selectors';
import {
  selectNowPlaying,
  selectPageNowPlaying,
  selectTotalPagesNowPlaying,
} from '../../../../store/features/movies/now-playing/selectors';
import { MovieDescription } from '../../../../store/features/movies/types';
import { Card, Paginator } from '../../../components';

import styles from './styles.module.scss';

const NowPlaying = (): React.ReactElement => {
  const selectedLanguage = useAppSelector(selectLanguageValue);
  const nowPlayings = useAppSelector(selectNowPlaying);
  const page = useAppSelector(selectPageNowPlaying);
  const totalPages = useAppSelector(selectTotalPagesNowPlaying);

  const dispatch = useAppDispatch();

  const onPageChanged = (pageNumber: number): void => {
    dispatch(setPageNowPlaying(pageNumber));
  };

  useEffect(() => {
    dispatch(getNowPlaying({ languageValue: selectedLanguage, page }));
  }, [selectedLanguage, page]);

  return (
    <div className="container">
      <div className={styles.list}>
        {nowPlayings?.results.map(card => (
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

export { NowPlaying };
