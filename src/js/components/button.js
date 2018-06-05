import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const attributes = {};

  Object.keys(props).filter((key) => {
    return key.indexOf('data-') === 0;
  }).forEach((key) => {
    attributes[key] = props[key];
  });

  if (props.disabled) {
    attributes.disabled = 'disabled';
  }

  return (
    <button
      {...attributes}
      className="btn"
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  type: PropTypes.string,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
