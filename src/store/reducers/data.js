import { SOME_ACTION } from '../actions/types';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SOME_ACTION:
      return { ...state, prop: state.prop + 1 };
    default:
      return state;
  }
};
