import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  width: 100%;
  height: 40px;
`;

const Navigation = ({ links }) => {
  return (
    <NavBar>
      {links.map(link => {
        return (
          <Link id={link.path} key={link.key} to={link.path}>
            {link.text}
          </Link>
        );
      })}
    </NavBar>
  );
};

export default Navigation;
