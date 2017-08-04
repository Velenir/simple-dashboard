import React from 'react';
import { connect } from 'react-redux';
import { PlaceholderWidget } from '../Placeholder';
import { UsersActivity } from '../Widgets';
import './Panel.scss';

const widgetComponents = {
  1: UsersActivity,
  2: PlaceholderWidget,
  3: PlaceholderWidget
};

const DropHere = () => <span className='panel__placeholder'>Drop Here</span>;

const Panel = ({ Component, id }) => (
  <div className='board__panel panel'>
    <Component id={id} />
  </div>
);

const mapStateToProps = (state, { id }) => ({
  Component: id == null ? DropHere : widgetComponents[id]
});

export default connect(mapStateToProps, null)(Panel);
