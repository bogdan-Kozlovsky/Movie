import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { PATHS } from '../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getPopular, movieDetails, setPagePopular } from '../../../../store';
import { selectLanguageValue } from '../../../../store/features/language/selectors';
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

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onPageChanged = (pageNumber: number): void => {
    dispatch(setPagePopular(pageNumber));
  };

  const getMovieDetails = (movieId: number): void => {
    dispatch(movieDetails(movieId));
    navigate(`${PATHS.MOVIE}/${movieId}`);
  };

  useEffect(() => {
    dispatch(getPopular({ languageValue: selectedLanguage, page }));
  }, [selectedLanguage, page]);

  return (
    <div className="container">
      <div className={styles.list}>
        {popular?.results.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            path={card.poster_path}
            onClickCard={getMovieDetails}
            release_date={card.release_date}
          />
        ))}
      </div>
      <Paginator page={page} totalPages={totalPages} onPageChange={onPageChanged} />
    </div>
  );
};

export { Popular };
