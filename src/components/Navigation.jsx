import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    let { links } = { ...this.props };

    return (
      <ul>
        {links.map(link => {
          return (
            <li key={link.key}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
