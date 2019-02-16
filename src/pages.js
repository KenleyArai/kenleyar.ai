import { lazy } from 'react';
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

export default pages;
