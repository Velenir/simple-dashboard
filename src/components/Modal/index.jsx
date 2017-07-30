import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
  render() {
    const { title, closeButton, children, aside, main } = this.props;

    return (
      <div className='modal'>
        <div className='modal__overlay' />
        <div className='modal__body'>
          <div className='modal__header'>
            <div className='modal__header__title'>{title}</div>
            {closeButton && <button className='modal__button modal__button--close' />}
          </div>
          <div className='modal__aside'>
            {typeof aside === 'function' ? aside() : aside}
          </div>
          <div className='modal__main'>
            {typeof main === 'function' ? main() : main}
            {typeof children === 'function' ? children() : children}
          </div>
          <div className='modal__footer'>
            <button className='modal__button modal__button--cancel' />
            <button className='modal__button modal__button--save' />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
