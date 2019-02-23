import React from 'react';
import styled from 'styled-components';
import addSlideIn from 'HOC/addSlideIn';

export const StyledListCardContainer = styled.li`
  background-color: pink;
`;
const ListCardContainer = addSlideIn(StyledListCardContainer);

export default ListCardContainer;
