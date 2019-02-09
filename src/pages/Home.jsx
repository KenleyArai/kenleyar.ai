import React from 'react';
import Deck from 'components/Deck';
import addAPICall from 'HOC/addAPICall';

const Home = ({ data }) => (
  <div className={'page'}>
    <h2>Home Page</h2>
    <Deck posts={data} />
  </div>
);

const HomePage = addAPICall(
  Home,
  'https://api.sheety.co/57263d46-98a1-496d-8274-c912a4fed721'
);

export default HomePage;
