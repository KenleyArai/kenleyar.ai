import React from 'react';
import ListCard from 'components/ListCard';
import DeckContainer from 'components/styled/DeckContainer';

const Deck = ({ posts }) => {
  return (
    <DeckContainer>
      {posts.map(post => <ListCard key={posts.key} {...post} />)}
    </DeckContainer>
  );
};

export default Deck;
