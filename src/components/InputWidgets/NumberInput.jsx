import React from 'react';

const NumberInput = ({ className, ...rest }) => (
  <input className={`generic-input ${className}`} {...rest} type='number' />
);

NumberInput.defaultProps = {
  className: ''
};

export default NumberInput;
