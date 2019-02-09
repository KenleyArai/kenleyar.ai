import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ links }) => {
  return (
    <nav>
      {links.map(link => {
        return (
          <Link id={link.path} key={link.key} to={link.path}>
            {link.text}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
