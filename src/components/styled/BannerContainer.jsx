import styled from 'styled-components';
import addSlideDown from 'HOC/addSlideDown';

const StyledBannerContainer = styled.div`
  background-color: gray;
  width: 100%;
`;

const BannerContainer = addSlideDown(StyledBannerContainer);

export default BannerContainer;
