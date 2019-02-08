import React, { Component } from 'react';
import addAPICall from 'HOC/addAPICall';
import MarkdownRenderer from 'react-markdown-renderer';

class Home extends Component {
  render() {
    let { data } = { ...this.props };
    return (
      <ul>
        <h1>Home Page</h1>
        {data.map(post => (
          <li key={post.key}>
            <h2>{post.title}</h2> <p>{post.desc}</p>
            <p>
              {post.is_md === 1 ? (
                <MarkdownRenderer markdown={post.markdown} />
              ) : (
                post.markdown
              )}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

const HomePage = addAPICall(
  Home,
  'https://api.sheety.co/e93e6add-de8b-4aa1-a8cb-ec7fcf66f79e'
);

export default HomePage;
