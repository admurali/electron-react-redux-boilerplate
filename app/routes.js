import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import DashboardPage from './containers/DashboardPage';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={DashboardPage} />
    </Switch>
  </App>
);
