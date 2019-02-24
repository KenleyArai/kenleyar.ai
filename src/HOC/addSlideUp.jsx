import React from 'react';
import { curry } from 'ramda';
import { useSpring, animated } from 'react-spring';

const addSlideUp = curry((WrappedComponent, props) => {
  const AnimatedComponent = animated(WrappedComponent);
  const animated_props = useSpring({
    config: { mass: 2, tension: 125, friction: 45 },
    from: { transform: 'translate3d(0, 150px, 0)' },
    to: { transform: 'translate3d(0, 0px, 0)' },
  });
  return <AnimatedComponent style={animated_props} {...props} />;
});

export default addSlideUp;
