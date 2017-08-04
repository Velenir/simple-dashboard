import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { openModalEditWidget, removeWidgetImmediately } from '../../store/actions';
import PopupMenu from './PopupMenu';
import './SettingsButton.scss';


class SettingsButton extends PureComponent {
  state = { open: false }

  openMenu = () => this.setState({ open: true })
  closeMenu = () => this.setState({ open: false })

  editWidget = (e) => {
    e.stopPropagation();
    const { openModalEditWidget, id } = this.props;
    this.closeMenu();
    openModalEditWidget(id);
  }

  removeWidget = () => {
    const { removeWidgetImmediately, id } = this.props;
    this.closeMenu();
    removeWidgetImmediately(id);
  }

  render() {
    const { edit: editEnabled, remove: removeEnabled } = this.props;

    return (
      <div
        role='menu'
        className='settings-button'
        tabIndex='0'
        onClick={this.openMenu}
        onBlur={this.closeMenu}
      >
        <PopupMenu open={this.state.open}>
          <span
            className={`popup-menu__button ${editEnabled ? '' : 'popup-menu__button--disabled'}`}
            disabled={!editEnabled}
            onClick={editEnabled && this.editWidget}
          >
            Edit widget
          </span>
          <span
            className={`popup-menu__button ${removeEnabled ? '' : 'popup-menu__button--disabled'}`}
            disabled={!removeEnabled}
            onClick={removeEnabled && this.removeWidget}
          >
            Remove widget
          </span>
        </PopupMenu>
      </div>
    );
  }
}

SettingsButton.defaultProps = {
  edit: true,
  remove: true
};

export default connect(null, { openModalEditWidget, removeWidgetImmediately })(SettingsButton);
