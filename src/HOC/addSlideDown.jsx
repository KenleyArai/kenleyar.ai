import React from 'react';
import { curry } from 'ramda';
import { useSpring, animated } from 'react-spring';

const addSlideDown = curry((WrappedComponent, props) => {
  const AnimatedComponent = animated(WrappedComponent);
  const animated_props = useSpring({
    config: { mass: 1, tension: 280, friction: 120 },
    from: { transform: 'translate3d(0,-100%, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 100%, 0)', opacity: 1 },
  });
  return <AnimatedComponent style={animated_props} {...props} />;
});

export default addSlideDown;
