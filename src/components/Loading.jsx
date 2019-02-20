import React from 'react';
import DoneLoader from 'components/styled/DoneLoader';
import StillLoader from 'components/styled/StillLoader';
import FailedLoader from 'components/styled/FailedLoader';

const Loading = ({ failed, data }) => {
  if (failed === undefined || failed === null) {
    return <StillLoader />;
  } else if (failed) {
    return <FailedLoader />;
  } else {
    return <DoneLoader />;
  }
};

export default Loading;
