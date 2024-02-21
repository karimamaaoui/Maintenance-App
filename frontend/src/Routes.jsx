import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Home from './components/Home/index';
import Signin from './components/auth/Signin/index';
import Signup from './components/auth/SignUp/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route key="home" path="/" element={<Home />} />,
      <Route key="login" path="login" element={<Signin />} />,
      <Route key="register" path="register" element={<Signup />} />

    ]
  )
);

export default router;
