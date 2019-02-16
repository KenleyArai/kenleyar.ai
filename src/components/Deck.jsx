import React from 'react';
import ListCard from 'components/ListCard';

const Deck = ({ posts }) => {
  return (
    <ul className="deck">
      {posts.map(post => <ListCard key={posts.key} {...post} />)}
    </ul>
  );
};

export default Deck;
