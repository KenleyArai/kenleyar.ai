import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import React from 'react';

const StyledDeckContainer = styled.ul`
  background-color: gray;
`;

const AnimatedDeckContainer = animated(StyledDeckContainer);

const DeckContainer = props => {
  const animated_props = useSpring({
    config: { mass: 3, tension: 150, friction: 25 },
    from: { transform: 'translate3d(0, 150px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0px, 0)', opacity: 1 },
  });
  return <AnimatedDeckContainer style={animated_props} {...props} />;
};

export default DeckContainer;
