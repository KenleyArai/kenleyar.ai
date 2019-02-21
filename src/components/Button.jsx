import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ callback }) => <div onClick={() => callback()}>Click Me</div>;

Button.propTypes = {
  callback: PropTypes.func,
};

export default Button;
