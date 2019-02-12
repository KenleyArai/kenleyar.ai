import AppContainer from 'components/styled/AppContainer';
import Navigation from 'components/Navigation';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import uuidv1 from 'uuid/v1';

const pages = [
  {
    path: '/',
    text: 'Home',
    key: uuidv1(),
  },
];

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Route
            render={({ location }) => (
              <Navigation links={pages} location={location.pathname} />
            )}
          />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </AppContainer>
      </Router>
    );
  }
}
