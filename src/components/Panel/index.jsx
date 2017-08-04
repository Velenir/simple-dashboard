import React from 'react';
import { connect } from 'react-redux';

import { DragSource, DropTarget } from 'react-dnd';
import { compose } from 'redux';

import { PlaceholderWidget } from '../Placeholder';
import { UsersActivity } from '../Widgets';
import { moveWidget } from '../../store/actions';
import { DnDtypes } from '../../store/constants';
import './Panel.scss';

const widgetComponents = {
  1: UsersActivity,
  2: PlaceholderWidget,
  3: PlaceholderWidget
};

const DropHere = () => <span className='panel__placeholder'>Drop Here</span>;

const Panel = ({ Component, id, connectDragSource, connectDropTarget, canDrop, isDragging }) => (
  connectDragSource(connectDropTarget(
    <div
      className='board__panel panel'
      style={{ borderColor: canDrop ? '#e8e8e8' : 'transparent', opacity: isDragging ? 0.4 : 1 }}
    >
      {Component ? <Component id={id} /> : canDrop && <DropHere />}
    </div>
  ))
);

const mapStateToProps = (state, { id }) => ({
  Component: id == null ? null : widgetComponents[id]
});

// export default connect(mapStateToProps, { moveWidget })(Panel);

const panelTarget = {
  canDrop(props, monitor) {
    return monitor.getItem().id !== props.id;
  },

  drop(props, monitor) {
    if (monitor.didDrop()) {
      return;
    }

    return { index: props.index };
  }
};

const panelSource = {
  canDrag(props) {
    return props.id != null;
  },

  beginDrag(props) {
    return { id: props.id };
  },

  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }

    const item = monitor.getItem();

    const dropResult = monitor.getDropResult();

    props.moveWidget(item.id, dropResult.index);
  }
};

const collectDrop = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  canDrop: monitor.canDrop()
});

const collectDrag = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});


export default compose(
  connect(mapStateToProps, { moveWidget }),
  DropTarget(DnDtypes.PANEL, panelTarget, collectDrop),
  DragSource(DnDtypes.PANEL, panelSource, collectDrag)
)(Panel);
