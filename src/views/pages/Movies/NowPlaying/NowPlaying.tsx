import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { PATHS } from '../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getNowPlaying, movieDetails, setPageNowPlaying } from '../../../../store';
import { selectLanguageValue } from '../../../../store/features/language/selectors';
import {
  selectNowPlaying,
  selectPageNowPlaying,
  selectTotalPagesNowPlaying,
} from '../../../../store/features/movies/now-playing/selectors';
import { Card, Paginator } from '../../../components';

import styles from './styles.module.scss';

const NowPlaying = (): React.ReactElement => {
  const selectedLanguage = useAppSelector(selectLanguageValue);
  const nowPlayings = useAppSelector(selectNowPlaying);
  const page = useAppSelector(selectPageNowPlaying);
  const totalPages = useAppSelector(selectTotalPagesNowPlaying);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onPageChanged = (pageNumber: number): void => {
    dispatch(setPageNowPlaying(pageNumber));
  };

  const getMovieDetails = (movieId: number): void => {
    dispatch(movieDetails(movieId));
    navigate(`${PATHS.MOVIE}/${movieId}`);
  };

  useEffect(() => {
    dispatch(getNowPlaying({ languageValue: selectedLanguage, page }));
  }, [selectedLanguage, page]);

  return (
    <div className="container">
      <div className={styles.list}>
        {nowPlayings?.results.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            path={card.poster_path}
            release_date={card.release_date}
            onClickCard={getMovieDetails}
          />
        ))}
      </div>
      <Paginator page={page} totalPages={totalPages} onPageChange={onPageChanged} />
    </div>
  );
};

export { NowPlaying };
