import React from 'react';
import ListCard from 'components/ListCard';
import DeckContainer from 'components/styled/DeckContainer';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

const Deck = ({ posts }) => {
  return (
    <DeckContainer>
      {posts.map(post => <ListCard key={uuidv1()} {...post} />)}
    </DeckContainer>
  );
};

Deck.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Deck;
