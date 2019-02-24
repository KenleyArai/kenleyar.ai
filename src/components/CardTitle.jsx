import React from 'react';
import StyledCardTitle from 'components/styled/CardTitle';
import { Link } from 'react-router-dom';
import { compose } from 'ramda';

const cleanString = str => str.replace(/\s/g, '');
const prePendPost = str => 'posts/' + str;
const prepareString = compose(
  prePendPost,
  cleanString
);

const CardTitle = ({ title }) => (
  <Link to={prepareString(title)}>
    <StyledCardTitle>{title}</StyledCardTitle>
  </Link>
);

export default CardTitle;
