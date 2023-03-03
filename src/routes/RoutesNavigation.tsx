import React, { memo } from 'react';

import { Route, Routes } from 'react-router-dom';

import { PATHS } from '../enums';
import { Login, Home, Movie, Search } from '../views/pages';

const RoutesNavigation = memo(() => (
  <div className="container">
    <Routes>
      <Route path={PATHS.LOGIN} element={<Login />} />
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={`${PATHS.MOVIE}/:id`} element={<Movie />} />
      <Route path={`${PATHS.SEARCH}`} element={<Search />} />
    </Routes>
  </div>
));

export { RoutesNavigation };
