import React from 'react';
import ListCard from 'components/ListCard';
import DeckContainer from 'components/styled/DeckContainer';
import PropTypes from 'prop-types';

const Deck = ({ posts }) => {
  return (
    <DeckContainer>
      {posts.map(post => <ListCard key={posts.key} {...post} />)}
    </DeckContainer>
  );
};

Deck.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Deck;
