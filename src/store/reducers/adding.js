import { NUM_OF_PANELS } from '../constants';
import {
  OPEN_MODAL_ADD_WIDGET,
  ADD_WIDGET,
  REMOVE_WIDGET,
  CHANGE_ADD_WIDGET_TAB,
  CHANGE_ADD_WIDGET_FILTER
} from '../actions/types';

const initialState = {
  added: Array.from({ length: NUM_OF_PANELS }, () => null),
  available: [1, 2, 3],
  active: 'available'
};

export default (state = initialState, action = {}, globalState = {}) => {
  switch (action.type) {
    case OPEN_MODAL_ADD_WIDGET:
      // if there are widgets on the board
      return globalState.panels.some(Boolean) ? {
        // reset tab
        active: initialState.active,
        // consider widget ids already added
        added: globalState.panels.slice(),
        // the rest (not yet added) are available for addition
        available: initialState.available.filter(id => !globalState.panels.includes(id))
      } : initialState;
    case ADD_WIDGET:
    {
      let added = false;
      return {
        ...state,
        added: state.added.map(id => !added && id == null ? (added = true, action.payload.id) : id),
        available: state.available.filter(id => id !== action.payload.id)
      };
    }
    case REMOVE_WIDGET:
      return {
        ...state,
        added: state.added.filter(id => id !== action.payload.id),
        available: state.available.concat(action.payload.id)
      };
    case CHANGE_ADD_WIDGET_TAB:
      return { ...state, active: action.payload.active };
    case CHANGE_ADD_WIDGET_FILTER:
      return { ...state, filter: action.payload.filter };
    default:
      return state;
  }
};
