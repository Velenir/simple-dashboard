import React from 'react';
import Progress from './Progress';
import User from './User';

const getPeriodValue = (user, period, periods) => periods[period][user.id];

const ActivityList = ({ users, sort, slice, period, ...periods }) => (
  <div className='activity-list'>
    {users
      .sort((a, b) => getPeriodValue(b, period, periods) - getPeriodValue(a, period, periods))
      .slice(0, slice)
      .reduce((acc, user, i) => {
        const value = periods[period][user.id];

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

export default ActivityList;
