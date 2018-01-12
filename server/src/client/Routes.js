import React from 'react';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';


export default[{
  ...App,
  routes:[
    {
      ...HomePage,
      path : "/",
      exact :true
    },{
      ...AdminsListPage,
      path: "/admins"
    },{
      ...UserListPage,
      path : "/users",
    },{
      ...NotFoundPage
    }
  ]
}];
