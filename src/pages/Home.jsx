import React, { Component } from 'react';
import addAPICall from 'HOC/addAPICall';

class Home extends Component {
  render() {
    let { data } = { ...this.props };
    return (
      <ul>
        <h1>Home Page</h1>
        {data.map(post => (
          <li key={post.key}>
            <h2>{post.title}</h2> <p>{post.desc}</p>
          </li>
        ))}
      </ul>
    );
  }
}

const HomePage = addAPICall(
  Home,
  'https://api.sheety.co/d16b86e9-bd73-4e11-8eb6-854fcde73d14'
);

export default HomePage;
