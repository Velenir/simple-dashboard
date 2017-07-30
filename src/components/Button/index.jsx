import React from 'react';
import './Button.scss';

const Button = ({ children, icon, className }) => (
  <button className={`button ${className}`} style={icon ? { paddingRight: '.8em' } : { padding: '0 .8em' }}>
    {icon && <img src={icon} alt='' />}
    {children}
  </button>
);

Button.defaultProps = {
  className: ''
};

export default Button;
