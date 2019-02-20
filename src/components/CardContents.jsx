import React from 'react';
import CardTitle from 'components/CardTitle';
import CardDesc from 'components/CardDesc';

const CardContents = ({ title, desc }) => {
  return (
    <React.Fragment>
      <CardTitle title={title} />
      <CardDesc desc={desc} />
    </React.Fragment>
  );
};

export default CardContents;
