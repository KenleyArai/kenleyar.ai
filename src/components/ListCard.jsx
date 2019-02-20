import React from 'react';
import CardContents from 'components/CardContents';
import ListCardContainer from 'components/styled/ListCardContainer';

const ListCard = ({ title, desc }) => {
  return (
    <ListCardContainer>
      <CardContents title={title} desc={desc} />
    </ListCardContainer>
  );
};

export default ListCard;
