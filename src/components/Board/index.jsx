import React from 'react';
import { connect } from 'react-redux';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { compose } from 'redux';

import Panel from '../Panel';
import './Board.scss';

const Board = ({ panels }) => (
  <div className='dashboard__board board'>
    {panels.map((id, i) => <Panel id={id} key={id == null ? `placeholder-${i}` : id} index={i} />)}
  </div>
);

const mapStateToProps = ({ panels }) => ({
  panels
});


export default compose(
  connect(mapStateToProps, null),
  DragDropContext(HTML5Backend)
)(Board);
