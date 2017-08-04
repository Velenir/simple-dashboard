import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Button from '../Button';
import Board from '../Board';

import { openModalAddWidget } from '../../store/actions';

import addWidgetIcon from '../../assets/addwidget - icon.svg';

class Dashboard extends PureComponent {
  render() {
    return (
      <div className='dashboard'>
        <Header className='dashboard__header' title='Team Dashboard'>
          <Button
            className='header__button button--add-widget'
            icon={addWidgetIcon}
            onClick={this.props.openModalAddWidget}
          >
            Add Widget
          </Button>
        </Header>
        <Board />
      </div>
    );
  }
}


export default connect(null, { openModalAddWidget })(Dashboard);
