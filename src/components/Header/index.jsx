import React, { PureComponent } from 'react';
import './Header.scss';
import Button from '../Button';
import addWidgetIcon from '../../assets/addwidget - icon.svg';

class Header extends PureComponent {
  render() {
    return (
      <div className='dashboard__header header'>
        <div className='header__title'>Team Dashboard</div>
        <div className='header__controls controls'>
          <Button className='header__button button--add-widget' icon={addWidgetIcon}>
            Add Widget
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
