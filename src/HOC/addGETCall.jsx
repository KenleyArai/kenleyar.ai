import Loading from 'components/Loading';
import React, { Component } from 'react';

const addGETCall = (WrappedComponent, url) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        is_loaded: null,
        data: null,
      };

      this.get = this.get.bind(this);
    }

    componentDidMount() {
      this.get();
    }

    get() {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(json =>
          this.setState({ is_loaded: true, data: JSON.parse(json) })
        )
        .catch(error =>
          this.setState({ is_loaded: false, data: JSON.parse(error) })
        );
    }

    render() {
      const { is_loaded, data } = this.state;
      const { ...passThrough } = this.props;

      if (is_loaded === null) {
        // We haven't finished attempting yet
        return <Loading />;
      } else if (is_loaded === false) {
        // We failed loading
        return <Loading failed={true} data={data} />;
      } else {
        // We loaded, so loaded the WrappedComponent
        return <WrappedComponent data={data} {...passThrough} />;
      }
    }
  };
};

export default addGETCall;
