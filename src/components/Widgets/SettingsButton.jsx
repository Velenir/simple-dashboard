import React, { PureComponent } from 'react';
import PopupMenu from './PopupMenu';
import './SettingsButton.scss';


class SettingsButton extends PureComponent {
  state = { open: false }

  openMenu = () => this.setState({ open: true })
  closeMenu = () => this.setState({ open: false })

  render() {
    return (
      <div
        role='menu'
        className='settings-button'
        tabIndex='0'
        onClick={this.openMenu}
        onBlur={this.closeMenu}
      >
        <PopupMenu open={this.state.open}>
          <span className='popup-menu__button'>Edit widget</span>
          <span className='popup-menu__button'>Remove widget</span>
        </PopupMenu>
      </div>
    );
  }
}

export default SettingsButton;
