import React, { Component } from 'react';
import './Modal.scss';

const addModeClass = (part, mode) => `modal__${part} ${mode ? `${mode}__${part}` : ''}`;

class Modal extends Component {
  render() {
    const { title, children, aside, main, open, mode } = this.props;

    if (!open) return null;

    return (
      <div className='modal'>
        <div className='modal__overlay' />
        <div className={addModeClass('body', mode)}>
          <div className={addModeClass('header', mode)}>
            <div className='modal__header__title'>{title}</div>
            {!mode && <button className='modal__button modal__button--close' />}
          </div>
          <div className={addModeClass('aside', mode)}>
            {typeof aside === 'function' ? aside() : aside}
          </div>
          <div className={addModeClass('main', mode)}>
            {typeof main === 'function' ? main() : main}
            {typeof children === 'function' ? children() : children}
          </div>
          <div className={addModeClass('footer', mode)}>
            <button className='modal__button modal__button--cancel' />
            <button className='modal__button modal__button--save' />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
