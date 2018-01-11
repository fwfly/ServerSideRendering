import React from 'react';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';

export default[{
  ...App,
  routes:[
    {
      ...HomePage,
      path : "/",
      exact :true
    },{
      ...UserListPage,
      path : "/users",
    },{
      ...NotFoundPage
    }
  ]
}];
