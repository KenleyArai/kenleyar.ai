import React from 'react';

const ListCard = ({ title, desc, unique_key }) => {
  return (
    <li key={unique_key} id={unique_key}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
};

export default ListCard;
