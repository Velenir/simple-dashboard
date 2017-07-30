import React, { PureComponent } from 'react';
import Header from '../Header';
import Board from '../Board';

class Dashboard extends PureComponent {
  render() {
    return (
      <div className='dashboard'>
        <Header />
        <Board />
      </div>
    );
  }
}

export default Dashboard;
