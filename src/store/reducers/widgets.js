import { initialStateForUserActivity } from '../constants';
import {
  SAVE_MODAL_ADD_WIDGET,
  REMOVE_WIDGET_IMMEDIATELY,
  CHANGE_ACTIVITY_PERIOD,
  SAVE_MODAL_EDIT_WIDGET
} from '../actions/types';


const activityReducer = (state, { payload }) => ({
  ...state,
  activityPeriod: payload.activityPeriod
});

const widgetSettingsReducer = (state, action, { editing }) => ({
  ...state,
  settings: { ...editing.settings }
});

const widgetReducer = (state = {}, action = {}, globalState) => {
  switch (action.type) {
    case SAVE_MODAL_EDIT_WIDGET:
      return widgetSettingsReducer(state, action, globalState);
    case CHANGE_ACTIVITY_PERIOD:
      return activityReducer(state, action);
    default:
      return state;
  }
};

const initialState = {
  [initialStateForUserActivity.id]: initialStateForUserActivity
};

export default (state = initialState, action = {}, globalState = {}) => {
  switch (action.type) {
    case SAVE_MODAL_ADD_WIDGET:
    {
      const newState = {};
      for (const wid of globalState.adding.added) {
        if (wid != null) newState[wid] = state[wid] || initialState[wid] || {};
      }
      return newState;
    }
    case SAVE_MODAL_EDIT_WIDGET:
      return {
        ...state,
        [globalState.editing.id]: widgetReducer(state[globalState.editing.id], action, globalState)
      };
    case CHANGE_ACTIVITY_PERIOD:
      return {
        ...state,
        [action.payload.id]: widgetReducer(state[action.payload.id], action, globalState)
      };
    case REMOVE_WIDGET_IMMEDIATELY:
      // return Object.keys(state)
      //   .reduce((acc, w) => w.id === action.payload.id ? acc : (acc[w.id] = w, acc), {});
      return Object.keys(state)
        .reduce((acc, id) => +id === action.payload.id ? acc : (acc[id] = state[id], acc), {});
    default:
      return state;
  }
};
