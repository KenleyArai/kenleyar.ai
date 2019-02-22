import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const StillLoader = () => {
  const [toggle, setToggle] = useState(0);

  const props = useSpring({
    config: { mass: 2, tension: 200, friction: 50 },
    to: { opacity: toggle === 1 ? 0.1 : 0.99 },
    from: { opacity: toggle === 1 ? 0.99 : 0.1 },
    onRest: () => setToggle(toggle === 1 ? 0 : 1),
  });

  return (
    <animated.div style={props} className="loader-container">
      Loading...
    </animated.div>
  );
};

export default StillLoader;
