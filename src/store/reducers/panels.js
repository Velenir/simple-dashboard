import { NUM_OF_PANELS } from '../constants';
import {
  SAVE_MODAL_ADD_WIDGET,
  REMOVE_WIDGET_IMMEDIATELY,
  MOVE_WIDGET
} from '../actions/types';

const initialState = Array.from({ length: NUM_OF_PANELS }, () => null);


export default (state = initialState, action = {}, globalState = {}) => {
  switch (action.type) {
    case SAVE_MODAL_ADD_WIDGET:
      return globalState.adding.added.slice();
    case REMOVE_WIDGET_IMMEDIATELY:
      return state.filter(wid => wid !== action.payload.id);
    case MOVE_WIDGET:
    {
      const { id, position } = action.payload;

      const newState = state.slice();
      const widgetInd = newState.indexOf(id);
      if (widgetInd === -1) return state;

      newState.splice(widgetInd, 1);
      newState.splice(position, 0, id);

      return newState;
    }
    default:
      return state;
  }
};
