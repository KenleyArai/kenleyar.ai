import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from 'pages/Home';
import Navigation from 'components/Navigation';
import NotFoundPage from 'pages/NotFound';
import uuidv1 from 'uuid/v1';
import styled from 'styled-components';

// Main app container meant to center everything within the app
const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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
