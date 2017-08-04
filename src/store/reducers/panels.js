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
      const { id: movingId, position: widgetIndTo } = action.payload;

      const widgetIndFrom = state.indexOf(movingId);

      if (widgetIndFrom === -1 || widgetIndTo < 0 || widgetIndTo >= NUM_OF_PANELS) return state;

      const widgetIdToReplace = state[widgetIndTo];

      return state.map((id, i) => i === widgetIndFrom ?
        widgetIdToReplace : i === widgetIndTo ? movingId : id
      );
    }
    default:
      return state;
  }
};
