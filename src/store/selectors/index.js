import { createSelector } from 'reselect';

export const getWidgetById = (state, props) => state.widgets[props.id];
export const getActivityData = (state) => state.asyncData.activity.data;

export const getPeriodDataById = createSelector(
  [getWidgetById, getActivityData],
  (widget, activityData) => activityData[widget.activityPeriod]
);

export const getUsers = createSelector(
  [getActivityData],
  (activityData) => activityData.users
);

export const getSortedUsers = createSelector(
  [getWidgetById, getUsers, getPeriodDataById],
  (widget, users, periodData) => {
    const k = widget.settings.sort === 'DESC' ? 1 : -1;

    return users.sort((userA, userB) => (periodData[userB.id] - periodData[userA.id]) * k);
  }
);

export const getSliceOfSortedUsers = createSelector(
  [getWidgetById, getSortedUsers],
  (widget, sortedUsers) => sortedUsers.slice(0, widget.settings.slice)
);
