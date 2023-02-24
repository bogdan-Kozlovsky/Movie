import React, { useEffect } from 'react';

import Banner from '../../components/Banner/Banner';
import Selector from '../../components/Selector/Selector';
import TrendingButton from '../../components/TrendingButton';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useDispatch';
import { selectLanguageValue } from '../../store/features/language/selectors';
import { getTrending } from '../../store/features/trending/asyncThunk/getTrending';
import {
  selectMediaType,
  selectTimeWindow,
  selectTrending,
} from '../../store/features/trending/selectors';

const Home = (): React.ReactElement => {
  const movies = useAppSelector(selectTrending);
  const mediaType = useAppSelector(selectMediaType);
  const timeWindow = useAppSelector(selectTimeWindow);
  const selectedLanguage = useAppSelector(selectLanguageValue);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getToken());
  // }, []);

  useEffect(() => {
    dispatch(getTrending({ mediaType, timeWindow, languageValue: selectedLanguage }));
  }, [timeWindow, mediaType, selectedLanguage]);

  return (
    <div>
      <div className="container">
        <div style={{ marginTop: '100px' }}>
          <Banner />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ marginRight: '15px' }}>У тренді</h1>
          <Selector />
          <TrendingButton />
        </div>
        <ul style={{ display: 'flex', overflowX: 'scroll' }}>
          {movies.map(movie => (
            <li key={movie.id} style={{ width: '33%', margin: '10px' }}>
              <img
                style={{ objectFit: 'cover', height: '200px' }}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title || movie.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Home };
