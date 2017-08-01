import React from 'react';
import './RadioButton.scss';

const RadioButton = ({ className, ...rest }) => (
  <input className={`radio-button ${className}`} {...rest} type='radio' />
);

RadioButton.defaultProps = {
  className: ''
};

export default RadioButton;
