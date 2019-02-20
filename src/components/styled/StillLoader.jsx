import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const StillLoader = () => {
  const [toggle, setToggle] = useState(0);

  setInterval(() => {
    setToggle(toggle === 1 ? 0 : 1);
  }, 1200);

  const props = useSpring({
    config: { mass: 1, tension: 280, friction: 120 },
    to: { opacity: toggle === 1 ? 0.1 : 0.9 },
    from: { opacity: toggle === 1 ? 0.9 : 0.1 },
  });
  return (
    <animated.div style={props} className="loader-container">
      Loading...
    </animated.div>
  );
};

export default StillLoader;
