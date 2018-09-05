import React, { Component } from 'react';
import addAPICall from 'HOC/addAPICall';

class Home extends Component {
  render() {
    let { data } = { ...this.props };
    return (
      <ul>
        <h1>Home Page</h1>
        {data.posts.map(post => (
          <li key={post.key}>
            <h2>{post.title}</h2> <p>{post.desc}</p>
          </li>
        ))}
      </ul>
    );
  }
}
const HomePage = addAPICall(Home, 'http://localhost:9000/');

export default HomePage;
