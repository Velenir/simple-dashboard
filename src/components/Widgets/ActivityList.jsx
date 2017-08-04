import React from 'react';
import { connect } from 'react-redux';
import Progress from './Progress';
import User from './User';
import { getPeriodDataById, getSliceOfSortedUsers } from '../../store/selectors';


const ActivityList = ({ users, periodData }) => (
  <div className='activity-list'>
    {users.reduce((acc, user, i) => {
      const value = periodData[user.id];

      acc.push(
        <User key={`${user.id}--user`} index={i} {...user} />,
        <Progress key={`${user.id}--stats`} id={user.id} value={value} />
      );
      return acc;
    }, [])}
  </div>
);

ActivityList.defaultProps = {
  slice: 5,
  period: 'weekly'
};

const mapStateToProps = (state, props) => ({
  periodData: getPeriodDataById(state, props),
  users: getSliceOfSortedUsers(state, props)
});

export default connect(mapStateToProps, null)(ActivityList);
