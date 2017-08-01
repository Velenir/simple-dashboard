import React, { PureComponent } from 'react';
import Panel from '../Panel';
import { UsersActivity } from '../Widgets';
import './Board.scss';

class Board extends PureComponent {
  getPanels = () => Array.from({ length: 6 }, (_, i) => (
    i === 0 ? <Panel key={i}><UsersActivity /></Panel> : <Panel key={i} />
  ));

  render() {
    return (
      <div className='dashboard__board board'>
        {this.getPanels()}
      </div>
    );
  }
}

export default Board;
