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

const mapStateToProps = ({ widgets, asyncData: { activity } }) => ({
  activityPeriod: widgets[WIDGET_ID].activityPeriod,
  loaded: !!activity.data,
  error: activity.error
});

export default connect(mapStateToProps, { changeActivityPeriod, getUserActivity })(UsersActivity);
