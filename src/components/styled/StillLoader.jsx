import React from 'react';
import { useSpring, animated } from 'react-spring';
import placeholder from '../../images/placeholder.png';
import { range } from 'ramda';

const items = range(0, 5);
const interp = i => r =>
  `translate3d(0, ${12 * Math.sin(r + (i * 2 * Math.PI) / 0.8)}px, 0)`;
const interp_op = i => r => `${Math.sin(r + i * 2 * Math.PI)}`;

const StillLoader = () => {
  const { opacity } = useSpring({
    to: async next => {
      while (1) {
        await next({ opacity: 0.05 });
        await next({ opacity: 0.99 });
      }
    },
    from: { opacity: 1 },
    config: { mass: 1, tension: 140, friction: 120, duration: 3500 },
  });

  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { mass: 1, tension: 280, friction: 120, duration: 4000 },
    reset: true,
  });

  return items.map(i => (
    <animated.img
      src={placeholder}
      key={i}
      style={{
        transform: radians.interpolate(interp(i)),
        opacity: opacity.interpolate(interp_op(i)),
      }}
    />
  ));

  //return (
  //  <animated.div style={props} className="loader-container">
  //   <img src={placeholder} />
  // </animated.div>
  //);
};

export default StillLoader;
