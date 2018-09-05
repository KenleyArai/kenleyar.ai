import React, { Component } from 'react';
import addAPICall from 'HOC/addAPICall';
import LoadingImg from '../components/LoadingImg';

class Portfolio extends Component {
  render() {
    let { data } = { ...this.props };
    return (
      <ul>
        <h1>Portfolio Page</h1>
        {data.projects.map(post => (
            <li key={post.key}>
              <LoadingImg src={post.src} />
            </li>
        ))}
      </ul>
    );
  }
}
const PortfolioPage = addAPICall(Portfolio, 'http://localhost:9000/projects');

export default PortfolioPage;
