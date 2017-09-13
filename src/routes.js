import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import UsersPage from './components/users/UsersPage';
import LoginPage from './components/login/LoginPage';
import auth from './auth/authenticator';

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/users" component={UsersPage} onEnter={requireAuth} />
  </Route>
);

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
};
