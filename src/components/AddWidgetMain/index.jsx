import React from 'react';
import WidgetPreview from '../WidgetPreview';
import usersActivityWidgetPicture from '../../assets/users activity widget picture.png';

const widgets = {
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

const AddWidgetMain = () => (
  <div>
    {Object.keys(widgets).map(key => {
      const widget = widgets[key];
      return <WidgetPreview {...widget} key={widget.id} />;
    })}
  </div>
);

export default AddWidgetMain;
