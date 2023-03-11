import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getPopular, setTotalPagesPopular } from '../../../store';
import { selectLanguageValue } from '../../../store/features/language/selectors';
import {
  selectPagePopular,
  selectPopular,
  selectTotalPagesPopular,
} from '../../../store/features/popular/selectors';
import { Paginator } from '../../components';

const Popular = (): React.ReactElement => {
  const selectedLanguage = useAppSelector(selectLanguageValue);
  const popular = useAppSelector(selectPopular);
  const page = useAppSelector(selectPagePopular);
  const totalPages = useAppSelector(selectTotalPagesPopular);

  const dispatch = useAppDispatch();

  const onPageChanged = (pageNumber: number): void => {
    dispatch(setTotalPagesPopular(pageNumber));
  };

  useEffect(() => {
    dispatch(getPopular({ languageValue: selectedLanguage, page }));
  }, [selectedLanguage, page]);

  return (
    <div>
      <Paginator page={page} totalPages={totalPages} onPageChange={onPageChanged} />
    </div>
  );
};

export { Popular };
