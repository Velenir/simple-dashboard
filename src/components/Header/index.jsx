import React, { PureComponent } from 'react';
import './Header.scss';

class Header extends PureComponent {
  static defaultProps = {
    className: ''
  }

  render() {
    const { className, children, title } = this.props;
    return (
      <div className={`header ${className}`}>
        <div className='header__title'>{title}</div>
        <div className='header__controls controls'>
          {typeof children === 'function' ? children : children}
        </div>
      </div>
    );
  }
}

export default Header;
