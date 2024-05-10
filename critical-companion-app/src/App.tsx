// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/index';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import Layout from './app/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
