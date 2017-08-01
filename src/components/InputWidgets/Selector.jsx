import React from 'react';

const Selector = ({ className, options, ...rest }) => (
  <select className={`generic-input ${className}`} {...rest}>
    {options.map(({ text, value, ...rest }) => (
      <option key={value} value={value} {...rest}>{text}</option>
    ))}
  </select>
);

Selector.defaultProps = {
  className: ''
};

export default Selector;
