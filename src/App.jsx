import Loading from 'components/Loading';
import Navigation from 'components/Navigation';
import AppContainer from 'components/styled/AppContainer';
import NotFoundPage from 'pages/NotFound';
import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import pages from './pages';

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          {/* Adding the navigation menu */}
          {/* Location is needed so we know what page we are on */}
          <Route
            render={({ location }) => (
              <Navigation links={pages} location={location.pathname} />
            )}
          />

          {/* Adding each route which resolves to a Page */}
          <Suspense fallback={<Loading />}>
            <Switch>
              {pages.map(page => (
                <Route
                  exact
                  path={page.path}
                  component={page.component}
                  key={page.key}
                />
              ))}
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </AppContainer>
      </Router>
    );
  }
}
