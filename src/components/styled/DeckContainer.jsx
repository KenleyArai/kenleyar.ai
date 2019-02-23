import addSlideIn from 'HOC/addSlideIn';
import React from 'react';
import styled from 'styled-components';

const StyledDeckContainer = styled.ul`
  background-color: gray;
`;

const DeckContainer = addSlideIn(StyledDeckContainer);

export default DeckContainer;
