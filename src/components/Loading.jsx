import React from 'react';
import { useSpring, animated } from 'react-spring';

const Loading = ({ failed, data }) => {
  if (failed === undefined || failed === null) {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    });

    return (
      <animated.div style={props} className="loader-container">
        <div className="loading">Loading...</div>
      </animated.div>
    );
  } else if (failed) {
    return (
      <animated.div className="loader-container">
        <div className="failed-load">{data}</div>
      </animated.div>
    );
  }
};

export default Loading;
