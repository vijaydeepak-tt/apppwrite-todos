import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

export default routes;
