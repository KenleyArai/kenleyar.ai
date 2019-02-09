import React from 'react';
import ListCard from 'components/ListCard';

export default function Deck({ posts }) {
  return (
    <ul className="deck">
      {posts.map(post => (
        <ListCard
          key={post.unique_id}
          unique_key={post.unique_id}
          desc={post.desc}
          title={post.title}
        />
      ))}
    </ul>
  );
}
