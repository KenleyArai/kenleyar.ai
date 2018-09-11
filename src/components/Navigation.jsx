import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  clickHandler(path) {
    let slider = document.getElementById("slider")
    let pos = document.getElementById(path)
  
    slider.style.transform = "translateX("  + (pos.offsetLeft ) + "px)"
  }

  render() {
    let { links } = { ...this.props };
    return (
      <nav>
        {links.map(link => {
          return (
            <Link id={link.path} onClick={() => this.clickHandler(link.path)} key={link.key} to={link.path}>
              {link.text}
            </Link>
          );
        })}
        <div id="slider" />
      </nav>
    );
  }
}
