import {
  OPEN_MODAL_EDIT_WIDGET,
  CHANGE_EDIT_WIDGET_SETTING
} from '../actions/types';

const initialState = {
  open: false,
  mode: ''
};

export default (state = initialState, action = {}, globalState = {}) => {
  switch (action.type) {
    case OPEN_MODAL_EDIT_WIDGET:
    // TODO grab widget's state inside connect
      // return action.payload.id;
      return {
        id: action.payload.id,
        settings: { ...globalState.widgets[action.payload.id].settings }
      };
    case CHANGE_EDIT_WIDGET_SETTING:
      return {
        ...state,
        settings: { ...state.settings, [action.payload.key]: action.payload.value }
      };
    default:
      return state;
  }
};
