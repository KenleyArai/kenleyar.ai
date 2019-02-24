import { lazy } from 'react';
import uuidv1 from 'uuid/v1';

const HomePage = lazy(() => import('pages/Home'));
const AboutPage = lazy(() => import('pages/About'));
const ProjectsPage = lazy(() => import('pages/Projects'));
const GalleryPage = lazy(() => import('pages/Gallery'));
const PostsPage = lazy(() => import('pages/Posts'));

const pages = [
  {
    path: '/',
    component: HomePage,
    text: 'Home',
    key: uuidv1(),
  },
  {
    path: '/about',
    component: AboutPage,
    text: 'About',
    key: uuidv1(),
  },
  {
    path: '/projects',
    component: ProjectsPage,
    text: 'Projects',
    key: uuidv1(),
  },
  {
    path: '/gallery',
    component: GalleryPage,
    text: 'Gallery',
    key: uuidv1(),
  },
  {
    path: '/posts/:post',
    component: PostsPage,
    text: 'Posts',
    key: uuidv1(),
    hide: true,
  },
];

export default pages;
