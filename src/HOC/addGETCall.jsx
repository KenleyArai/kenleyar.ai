import Loading from 'components/Loading';
import React, { useEffect, useState } from 'react';

const addGETCall = (WrappedComponent, url) => {
  const GET = () => {
    const [is_loaded, setIsLoaded] = useState(null);
    const [data, setData] = useState(null);

    const get = () => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(json => setData(json))
        .then(() => setIsLoaded(true))
        .catch(error => setIsLoaded(false));
    };

    useEffect(() => get(), []);

    if (is_loaded === null) {
      // We haven't finished attempting yet
      return <Loading />;
    } else if (is_loaded === false) {
      // We failed loading
      return <Loading failed={true} />;
    } else {
      // We loaded, so loaded the WrappedComponent
      return <WrappedComponent data={data} />;
    }
  };

  return GET;
};

export default addGETCall;
