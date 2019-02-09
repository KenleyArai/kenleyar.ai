import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';

const addAPICall = (WrappedComponent, url) => {
  const GET = () => {
    const [is_loaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);

    const get = () => {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .then(() => setIsLoaded(true));
    };

    useEffect(() => get());

    return is_loaded ? <WrappedComponent data={data} get={get} /> : <Loading />;
  };

  return GET;
};

export default addAPICall;
