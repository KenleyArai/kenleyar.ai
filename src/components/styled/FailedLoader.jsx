import React from 'react';

const FailedLoader = ({ data }) => (
  <React.Fragment>{data.toString()}</React.Fragment>
);

export default FailedLoader;
