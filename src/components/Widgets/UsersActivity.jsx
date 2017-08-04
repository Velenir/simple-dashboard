import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import ActivityList from './ActivityList';
import Selector from '../InputWidgets/Selector';
import SettingsButton from './SettingsButton';
import Loader from './Loader';
import { changeActivityPeriod, getUserActivity } from '../../store/actions';
import './UsersActivity.scss';

const activityOptions = [
  {
    text: 'Daily',
    value: 'daily'
  },
  {
    text: 'Weekly',
    value: 'weekly'
  },
  {
    text: 'Monthly',
    value: 'monthly'
  }
];

const WIDGET_ID = 1;

// const UsersActivity = ({ activityPeriod }) => (
//   <div className='widget user-activity'>
//     <Header title='User Activity' className='widget__header'>
//       <Selector options={activityOptions} value={activityPeriod} className='widget__header__selector' onChange={} />
//       <SettingsButton />
//     </Header>
//     <div className='widget__body'>
//       <ActivityList {...data} />
//     </div>
//   </div>
// );

class UsersActivity extends Component {
  onChange = (e) => {
    const { id = WIDGET_ID, changeActivityPeriod } = this.props;
    changeActivityPeriod(id, e.target.value);
  }
  render() {
    const { activityPeriod, id, loaded, error, getUserActivity } = this.props;
    return (
      <div className='widget user-activity'>
        <Header title='User Activity' className='widget__header'>
          <Selector options={activityOptions} value={activityPeriod} className='widget__header__selector' onChange={this.onChange} />
          <SettingsButton id={id} />
        </Header>
        <div className='widget__body'>
          <Loader
            component={ActivityList}
            load={getUserActivity}
            loaded={loaded}
            error={error}
            id={id}
          />
        </div>
      </div>
    );
  }
}

UsersActivity.defaultProps = {
  activityPeriod: 'weekly'
};

const data = {
  company: 123,
  start_time: '2017-05-01 15:20:17',
  end_time: '2017-06-01 15:40:17',
  users: [
    {
      id: '194887',
      lastname: 'Doe',
      name: 'Jane'
    },
    {
      id: '194888',
      lastname: 'Barret',
      name: 'Samuel'
    },
    {
      id: '194889',
      lastname: 'Love',
      name: 'Scott'
    },
    {
      id: '194890',
      lastname: 'McDaniel',
      name: 'Michael'
    },
    {
      id: '194891',
      lastname: 'Wilkerson',
      name: 'Alejandro'
    },
    {
      id: '194892',
      lastname: 'Fowler',
      name: 'Ivan'
    },
    {
      id: '194893',
      lastname: 'Doe',
      name: 'John'
    }
  ],
  daily: {
    194887: 10.123,
    194888: 68.23,
    194889: 78.4,

    194890: 20.8,
    194891: 7.92,
    194892: 88.02,
    194893: 78.23
  },
  weekly: {
    194887: 60.123,
    194888: 98.23,
    194889: 88.4,

    194890: 80.8,
    194891: 77.92,
    194892: 71.02,
    194893: 14.23
  },
  monthly: {
    194887: 50.123,
    194888: 88.23,
    194889: 78.4,

    194890: 70.8,
    194891: 67.92,
    194892: 61.02,
    194893: 4.23
  }
};

const mapStateToProps = ({ widgets, asyncData: { activity } }) => ({
  activityPeriod: widgets[WIDGET_ID].activityPeriod,
  loaded: !!activity.data,
  error: activity.error
});

export default connect(mapStateToProps, { changeActivityPeriod, getUserActivity })(UsersActivity);
