import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: null };

    this.getPosition = this.getPosition.bind(this);
    this.tick = this.tick.bind(this);

    this.timer = setInterval(this.tick, 50);
  }

  tick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.setState({ top: 0, left: 0 });
  }

  getPosition() {
    return {
      'boxShadow':
        Math.sin((3.14 * this.state.counter) / 16) * 30 +
        'px ' +
        '2px ' +
        Math.cos((3.14 * this.state.counter) / 8) * 10 +
        'px 20px #888888',
      left: Math.sin((3.14 * this.state.counter) / 16) * 100 + 'px',
    };
  }

  render() {
    return (
      <div id="loader-container">
        <div style={this.getPosition()} id="loader" />
      </div>
    );
  }
}

export default Loading;
