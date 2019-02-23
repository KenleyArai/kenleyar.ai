import React from 'react';
import StyledButton from 'components/styled/Button';
import PropTypes from 'prop-types';
import useHover from 'hooks/useHover';

const Button = ({ callback }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <StyledButton innerRef={hoverRef} onClick={() => callback()}>
      {isHovered ? '😁' : '☹️'}
    </StyledButton>
  );
};

Button.propTypes = {
  callback: PropTypes.func,
};

export default Button;
