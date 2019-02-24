import React from 'react';
import { curry } from 'ramda';
import { useSpring, animated } from 'react-spring';

const addFadeIn = curry((WrappedComponent, props) => {
  const AnimatedComponent = animated(WrappedComponent);
  const animated_props = useSpring({
    config: { mass: 1, tension: 120, friction: 60 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return <AnimatedComponent style={animated_props} {...props} />;
});

export default addFadeIn;
