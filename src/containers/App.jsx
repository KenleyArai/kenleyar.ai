import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import uuidv1 from 'uuid/v1';

import HomePage from 'pages/Home';
import Navigation from 'components/Navigation';
import NotFoundPage from 'pages/NotFound';

const pages = [
  {
    path: '/',
    text: 'Home',
    component: HomePage,
    key: uuidv1(),
  },
];

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Route
            render={({ location }) => (
              <Navigation links={pages} location={location.pathname} />
            )}
          />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
