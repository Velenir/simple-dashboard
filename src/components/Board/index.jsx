import React, { PureComponent } from 'react';
import Panel from '../Panel';
import './Board.scss';

class Board extends PureComponent {
  getPanels = () => Array.from({ length: 6 }, (_, i) => <Panel key={i} />);

  render() {
    return (
      <div className='dashboard__board board'>
        {this.getPanels()}
      </div>
    );
  }
}

export default Board;
