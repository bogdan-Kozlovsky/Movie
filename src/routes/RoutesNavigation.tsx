import React, { memo } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { Movie } from '../pages/Movie/Movie';
import { Search } from '../pages/search/Search';
import { PATHS } from '../utils/enum';

const RoutesNavigation = memo(() => (
  <div className="container">
    <Routes>
      {/* <Route path={PATH.LOGIN} element={<Login />} /> */}
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={`${PATHS.MOVIE}/:id`} element={<Movie />} />
      <Route path={`${PATHS.SEARCH}`} element={<Search />} />
    </Routes>
  </div>
));

export { RoutesNavigation };
