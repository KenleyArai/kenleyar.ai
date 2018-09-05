import React from 'react';
import Loading from 'components/Loading';

const addAPICall = (WrappedComponent, url) => {
  class GET extends React.Component {
    constructor(props) {
      super(props);

      this.get = this.get.bind(this);

      this.state = {
        loaded: null,
        data: null,
      };
    }

    componentDidMount() {
      this.get();
    }

    get() {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ data, loaded: true }));
    }

    render() {
      return this.state.loaded ? (
        <WrappedComponent {...this.props} data={this.state.data} get={this.get} />
      ) : (
        <Loading />
      );
    }
  }

  return GET;
};

export default addAPICall;
