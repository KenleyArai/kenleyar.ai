import React from 'react';
import Deck from 'components/Deck';
import PageBanner from 'components/PageBanner';
import addGETCall from 'HOC/addGETCall';

const Home = ({ data }) => (
  <div className={'page'}>
    <PageBanner header={'Home Page'} />
    <Deck posts={data} />
  </div>
);

const HomePage = addGETCall(
  Home,
  'https://api.sheety.co/57263d46-98a1-496d-8274-c912a4fed721'
);

export default HomePage;
