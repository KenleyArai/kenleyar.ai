import React from 'react';
import Deck from 'components/Deck';
import PageBanner from 'components/PageBanner';
import addAPICall from 'HOC/addAPICall';

const Home = ({ data }) => (
  <div className={'page'}>
    <PageBanner header={'Home Page'} />
    <Deck posts={data} />
  </div>
);

const HomePage = addAPICall(
  Home,
  'https://api.sheety.co/57263d46-98a1-496d-8274-c912a4fed721'
);

export default HomePage;
