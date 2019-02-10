import React, { useState, useEffect } from 'react';

const Loading = ({ failed }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCount(count + 1);
  }

  function getPosition() {
    return {
      boxShadow:
        Math.sin((3.14 * count) / 16) * 30 +
        'px ' +
        '2px ' +
        Math.cos((3.14 * count) / 8) * 10 +
        'px 20px #888888',
      left: Math.sin((3.14 * count) / 16) * 100 + 'px',
    };
  }

  if (failed === undefined || failed === null) {
    return (
      <div id="loader-container">
        <div style={getPosition()} id="loader" />
      </div>
    );
  } else if (failed) {
    return (
      <div id="loader-container">
        <p>Could not load component</p>
      </div>
    );
  }
};

export default Loading;
