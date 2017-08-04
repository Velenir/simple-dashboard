import React from 'react';
import { connect } from 'react-redux';
import WidgetPreview from '../WidgetPreview';
import usersActivityWidgetPicture from '../../assets/users activity widget picture.png';
import { removeWidget, addWidget } from '../../store/actions';

import './AddWidgetMain.scss';

const childWidgets = {
  1: {
    id: 1,
    title: 'User Activity',
    description: `Users who worked more or less than their minimum hours
    required daily, weekly and monthly.`,
    by: 'TimeDoctor',
    variables: ['USERS', 'WEBSITES', 'APPS', 'TIME', 'DATE'],
    icon: usersActivityWidgetPicture
  },
  2: {
    id: 2,
    title: 'Hours Tracked',
    description: 'Total hours worked monthly, weekly, daily by Users.',
    by: 'TimeDoctor',
    variables: ['USERS', 'DATE']
  },
  3: {
    id: 3,
    title: 'Top Mobile Users',
    description: 'Shows you highest and lowest productive hours of users monthly, weekly, daily.',
    by: 'TimeDoctor',
    variables: ['USERS', 'HIGHEST', 'LOWEST', 'DATE']
  }
};

const AddWidgetMain = ({ active, widgets, removeWidget, addWidget, filter }) => (
  <div className='add-widget__main'>
    {(filter ? widgets.filter(
      id => id == null ? null : childWidgets[id].title.toLowerCase().includes(filter))
      : widgets).map(id => {
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
