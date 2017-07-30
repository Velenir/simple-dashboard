import { SOME_ACTION } from '../actions/types';

const initialState = {
  prop: 0
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SOME_ACTION:
      return { ...state, prop: state.prop + 1 };
    default:
      return state;
  }
};
