import React, { PureComponent } from 'react';
import Header from '../Header';
import Button from '../Button';
import Board from '../Board';
import addWidgetIcon from '../../assets/addwidget - icon.svg';

class Dashboard extends PureComponent {
  render() {
    return (
      <div className='dashboard'>
        <Header className='dashboard__header' title='Team Dashboard'>
          <Button className='header__button button--add-widget' icon={addWidgetIcon}>
            Add Widget
          </Button>
        </Header>
        <Board />
      </div>
    );
  }
}

export default Dashboard;
