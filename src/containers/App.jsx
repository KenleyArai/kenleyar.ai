import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from 'pages/Home';
import AboutPage from 'pages/About';
import PortfolioPage from 'pages/Portfolio';
import Navigation from 'components/Navigation';
import NotFoundPage from 'pages/NotFound';

const pages = [
  {
    path: '/',
    text: 'Home',
    key: 0,
  },
  {
    path: '/about',
    text: 'About',
    key: 1,
  },
  {
    path: '/portfolio',
    text: 'Portfolio',
    key: 3,
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
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
