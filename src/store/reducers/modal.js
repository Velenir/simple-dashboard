import {
  OPEN_MODAL_ADD_WIDGET,
  OPEN_MODAL_EDIT_WIDGET,
  CANCEL_MODAL,
  SAVE_MODAL_ADD_WIDGET,
  SAVE_MODAL_EDIT_WIDGET
} from '../actions/types';

const initialState = {
  open: false,
  mode: ''
};

const titlesByWidgetId = {
  1: 'User Activity',
  2: 'Placeholder',
  3: 'Placeholder'
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL_ADD_WIDGET:
      return { ...state, open: true, mode: 'add', title: 'Add a widget' };
    case OPEN_MODAL_EDIT_WIDGET:
      return { ...state, open: true, mode: 'edit', title: titlesByWidgetId[action.payload.id] };
    case CANCEL_MODAL:
    case SAVE_MODAL_ADD_WIDGET:
    case SAVE_MODAL_EDIT_WIDGET:
      return { ...state, open: false, mode: '' };
    default:
      return state;
  }
};
