import {
  SAVE_MODAL_ADD_WIDGET,
  REMOVE_WIDGET_IMMEDIATELY
} from '../actions/types';

const initialState = [null, null, null, null, null, null];


export default (state = initialState, action = {}, globalState = {}) => {
  switch (action.type) {
    case SAVE_MODAL_ADD_WIDGET:
      return globalState.adding.added.slice();
    case REMOVE_WIDGET_IMMEDIATELY:
      return state.filter(wid => wid !== action.payload.id);
    default:
      return state;
  }
};
