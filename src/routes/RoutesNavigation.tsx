import React, { memo } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { Search } from '../pages/search/Search';
import { PATH } from '../utils/enum/paths';

const RoutesNavigation = memo(() => (
  <div className="container">
    <Routes>
      {/* <Route path={PATH.LOGIN} element={<Login />} /> */}
      <Route path={PATH.HOME} element={<Home />} />

      <Route path={`${PATH.SEARCH}`} element={<Search />} />
    </Routes>
  </div>
));

export { RoutesNavigation };
