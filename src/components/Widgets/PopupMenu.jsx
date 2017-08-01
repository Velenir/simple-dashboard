import React from 'react';
import './PopupMenu.scss';

const PopupMenu = ({ className, children, open }) => open ? (
  <div className={`popup-menu ${className}`}>
    {children}
  </div>
) : null;

PopupMenu.defaultProps = {
  className: ''
};

export default PopupMenu;
