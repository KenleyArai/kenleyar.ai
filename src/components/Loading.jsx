import React from 'react';
import DoneLoader from 'components/styled/DoneLoader';
import StillLoader from 'components/styled/StillLoader';
import FailedLoader from 'components/styled/FailedLoader';
import PropTypes from 'prop-types';

const Loading = ({ failed, data }) => {
  if (failed === undefined || failed === null) {
    return <StillLoader />;
  } else if (failed) {
    return <FailedLoader data={data} />;
  } else {
    return <DoneLoader />;
  }
};

Loading.propTypes = {
  failed: PropTypes.bool,
  data: PropTypes.string,
};

export default Loading;
