import React, { memo } from 'react';

import { Route, Routes } from 'react-router-dom';

import { PATHS } from '../enums';
import { Home, Movie, Popular, Search } from '../views/pages';

const RoutesNavigation = memo(() => (
  <Routes>
    <Route path={PATHS.HOME} element={<Home />} />
    <Route path={`${PATHS.MOVIE}/:id`} element={<Movie />} />
    <Route path={`${PATHS.SEARCH}`} element={<Search />} />
    <Route path={`${PATHS.POPULAR}`} element={<Popular />} />
  </Routes>
));

export { RoutesNavigation };
