import React from 'react';
import './Button.scss';

const Button = ({ children, icon, className, onClick }) => (
  <button
    className={`button ${className}`}
    style={icon ? { paddingRight: '.8em' } : { padding: '0 .8em' }}
    onClick={onClick}
  >
    {icon && <img src={icon} alt='' />}
    {children}
  </button>
);

Button.defaultProps = {
  className: ''
};

export default Button;
