import React from 'react';
import { useSpring, animated } from 'react-spring';

const StillLoader = () => {
  const props = useSpring({
    config: { mass: 2, tension: 200, friction: 50 },
    from: { opacity: 1 },
    to: async next => {
      while (1) {
        await next({ opacity: 0 });
        await next({ opacity: 1 });
      }
    },
  });

  return (
    <animated.div style={props} className="loader-container">
      Loading...
    </animated.div>
  );
};

export default StillLoader;
