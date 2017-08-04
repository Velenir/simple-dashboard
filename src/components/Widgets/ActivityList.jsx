import React from 'react';
import { connect } from 'react-redux';
import Progress from './Progress';
import User from './User';
import { getPeriodDataById, getSliceOfSortedUsers } from '../../store/selectors';

// const getPeriodValue = (user, period, periods) => periods[period][user.id];

// const ActivityList = ({ users, sort, slice, period, ...periods }) => (
//   <div className='activity-list'>
//     {users
//       .sort((a, b) => getPeriodValue(b, period, periods) - getPeriodValue(a, period, periods))
//       .slice(0, slice)
//       .reduce((acc, user, i) => {
//         const value = periods[period][user.id];
//
//         acc.push(
//           <User key={`${user.id}--user`} index={i} {...user} />,
//           <Progress key={`${user.id}--stats`} id={user.id} value={value} />
//         );
//         return acc;
//       }, [])}
//   </div>
// );
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

// const mapStateToProps = ({ asyncData: { data }, widgets }, { id }) => ({
//   periodData: data[widgets[id].activityPeriod],
//   users: data.users.sort
// });

// const mapStateToProps = ({ asyncData: { activity: { data } }, widgets }, { id }) => {
//   const widget = widgets[id];
//   const periodData = data[widget.activityPeriod];
//   const k = widget.settings.sort === 'DESC' ? 1 : -1;
//
//   const users = data.users
//     .sort((userA, userB) => (periodData[userB.id] - periodData[userA.id]) * k)
//     .slice(0, widget.settings.sice);
//
//   return { users, periodData };
// };

const mapStateToProps = (state, props) => ({
  periodData: getPeriodDataById(state, props),
  users: getSliceOfSortedUsers(state, props)
});

export default connect(mapStateToProps, null)(ActivityList);
