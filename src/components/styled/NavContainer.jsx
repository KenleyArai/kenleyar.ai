import styled from 'styled-components';

import addFadeIn from 'HOC/addFadeIn';

const StyledNavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
  background-color: orange;
`;

const NavContainer = addFadeIn(StyledNavContainer);

export default NavContainer;
