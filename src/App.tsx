import React, { useEffect } from 'react';

import Selector from './components/Selector/Selector';
import TrendingButton from './components/TrendingButton';
import { useAppSelector } from './hooks/useAppSelector';
import { useAppDispatch } from './hooks/useDispatch';
import { getTrending } from './store/features/trending/asyncThunk/getTrending';
import {
  selectMediaType,
  selectTimeWindow,
  selectTrending,
} from './store/features/trending/selectors';

const App = (): React.ReactElement => {
  const movies = useAppSelector(selectTrending);
  const mediaType = useAppSelector(selectMediaType);
  const timeWindow = useAppSelector(selectTimeWindow);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrending({ mediaType, timeWindow }));
  }, [timeWindow, mediaType]);

  return (
    <div className="container">
      <div className="content">
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

export default App;
