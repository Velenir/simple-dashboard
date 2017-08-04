import React, { Component } from 'react';
import { connect } from 'react-redux';

import { cancelModal, saveModalAddWidget, saveModalEditWidget } from '../../store/actions';

import EditWidgetMain from '../EditWidgetMain';
import AddWidgetMain from '../AddWidgetMain';
import AddWidgetAside from '../AddWidgetAside';

import './Modal.scss';

const childComponents = {
  add: { aside: () => <AddWidgetAside />, main: () => <AddWidgetMain /> },
  edit: { main: () => <EditWidgetMain /> }
};

const addModeClass = (part, mode) => `modal__${part} ${mode ? `${mode}__${part}` : ''}`;

class Modal extends Component {
  render() {
    const { title, children, aside, main, open, mode, cancelModal, saveModal } = this.props;

    if (!open) return null;

    return (
      <div className='modal'>
        <div className='modal__overlay' />
        <div className={addModeClass('body', mode)}>
          <div className={addModeClass('header', mode)}>
            <div className='modal__header__title'>{title}</div>
            {mode === 'add'
              && <button className='modal__button modal__button--close' onClick={cancelModal} />}
          </div>
          <div className={addModeClass('aside', mode)}>
            {typeof aside === 'function' ? aside() : aside}
          </div>
          <div className={addModeClass('main', mode)}>
            {typeof main === 'function' ? main() : main}
            {typeof children === 'function' ? children() : children}
          </div>
          <div className={addModeClass('footer', mode)}>
            <button className='modal__button modal__button--cancel' onClick={cancelModal} />
            <button className='modal__button modal__button--save' onClick={saveModal} />
          </div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  mode: 'add'
};

const mapStateToProps = ({ modal }, { mode }) => (console.log(modal), {
  ...modal,
  ...childComponents[modal.mode || mode]
});

const mapDispatchToProps = {
  cancelModal,
  saveModalAddWidget,
  saveModalEditWidget
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  cancelModal: dispatchProps.cancelModal,
  saveModal: stateProps.mode === 'add' ? dispatchProps.saveModalAddWidget :
    stateProps.mode === 'edit' ? dispatchProps.saveModalEditWidget :
      dispatchProps.cancelModal,
  ...ownProps
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Modal);
