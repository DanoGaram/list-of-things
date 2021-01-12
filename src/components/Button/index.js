import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  return (
    <div className={`button-container ${props.color}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'default'])
};

export default Button;
