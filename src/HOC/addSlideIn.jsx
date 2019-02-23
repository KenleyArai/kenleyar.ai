import React from 'react';
import { curry } from 'ramda';
import { useSpring, animated } from 'react-spring';

const addSlideIn = curry((WrappedComponent, props) => {
  const AnimatedComponent = animated(WrappedComponent);
  const animated_props = useSpring({
    config: { mass: 2, tension: 125, friction: 45, clamp: true },
    from: { transform: 'translate3d(0, 150px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0px, 0)', opacity: 1 },
  });
  return <AnimatedComponent style={animated_props} {...props} />;
});

export default addSlideIn;
