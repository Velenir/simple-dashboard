import React from 'react';
import { connect } from 'react-redux';
import Panel from '../Panel';
import './Board.scss';

const Board = ({ panels }) => (
  <div className='dashboard__board board'>
    {panels.map((id, i) => <Panel id={id} key={id == null ? `placeholder-${i}` : id} />)}
  </div>
);

const mapStateToProps = ({ panels }) => ({
  panels
});

export default connect(mapStateToProps, null)(Board);
