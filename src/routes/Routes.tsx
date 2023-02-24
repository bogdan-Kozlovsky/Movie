import React, { memo } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { PATH } from '../utils/enum/paths';

export const RoutesNav = memo(() => (
  <div className="container">
    <Routes>
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.HOME} element={<Home />} />
    </Routes>
  </div>
));
