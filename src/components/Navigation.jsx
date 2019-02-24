import NavContainer from './styled/NavContainer';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ links }) => {
  return (
    <NavContainer>
      {links.filter(x => !x.hide).map(link => {
        return (
          <Link id={link.path} key={link.key} to={link.path}>
            {link.text}
          </Link>
        );
      })}
    </NavContainer>
  );
};

export default Navigation;
