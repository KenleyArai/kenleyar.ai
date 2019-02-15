import PageContainer from './../components/styled/PageContainer';
import React from 'react';
import Deck from 'components/Deck';
import PageBanner from 'components/PageBanner';
import addGETCall from 'HOC/addGETCall';

const Home = ({ data }) => (
  <PageContainer>
    <PageBanner header={'Home Page'} />
    <Deck posts={data} />
  </PageContainer>
);

const HomePage = addGETCall(Home, 'http://localhost:5000/posts');

export default HomePage;
