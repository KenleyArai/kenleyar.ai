import styled from 'styled-components';
import addFadeIn from 'HOC/addFadeIn';

const StyledDeckContainer = styled.ul`
  background-color: gray;
`;

const DeckContainer = addFadeIn(StyledDeckContainer);

export default DeckContainer;
