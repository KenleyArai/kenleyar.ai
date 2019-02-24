import styled from 'styled-components';
import addSlideUp from 'HOC/addSlideUp';

export const StyledListCardContainer = styled.li`
  background-color: pink;
`;
const ListCardContainer = addSlideUp(StyledListCardContainer);

export default ListCardContainer;
