import Navigation from 'components/Navigation';
import AppContainer from 'components/styled/AppContainer';
import NotFoundPage from 'pages/NotFound';
import Loading from 'components/Loading';
import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import uuidv1 from 'uuid/v1';

const HomePage = lazy(() => import('pages/Home'));

const pages = [
  {
    path: '/',
    component: HomePage,
    text: 'Home',
    key: uuidv1(),
  },
];

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          {/* Adding the navigation menu */}
          <Route
            render={({ location }) => (
              <Navigation links={pages} location={location.pathname} />
            )}
          />

          {/* Adding each route which resolves to a Page */}
          <Suspense fallback={<Loading />}>
            <Switch>
              {pages.map(page => (
                <Route exact path={page.path} component={page.component} />
              ))}
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </AppContainer>
      </Router>
    );
  }
}
