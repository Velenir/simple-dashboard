import React from 'react';
import { connect } from 'react-redux';
import WidgetPreview from '../WidgetPreview';
import { removeWidget, addWidget } from '../../store/actions';
import { previewWidgets as childWidgets } from '../../store/constants';

import './AddWidgetMain.scss';

const AddWidgetMain = ({ active, widgets, removeWidget, addWidget, filter }) => (
  <div className='add-widget__main'>
    {(filter ? widgets.filter(
      id => id == null ? null : childWidgets[id].title.toLowerCase().includes(filter))
      : widgets).sort().map(id => {
      if (id == null) return null;

      const widget = childWidgets[id];
      return (
        <WidgetPreview
          {...widget}
          key={widget.id}
          active={active}
          remove={removeWidget}
          add={addWidget}
        />
      );
    })
    }
  </div>
);

const mapStateToProps = ({ adding }) => ({
  active: adding.active,
  widgets: adding[adding.active],
  filter: adding.filter && adding.filter.toLowerCase()
});

export default connect(mapStateToProps, { removeWidget, addWidget })(AddWidgetMain);
