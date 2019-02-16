import React from 'react';

const ListCard = ({ title, desc }) => {
  return (
    <React.Fragment>
      <li>
        <h2>{title}</h2>
        <p>{desc}</p>
      </li>
    </React.Fragment>
  );
};

export default ListCard;
