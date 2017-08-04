import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions/types';

const initialState = {
  activity: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, activity: { fetching: true } };
    case FETCH_SUCCESS:
      return { ...state, activity: { data: action.payload.data } };
    case FETCH_FAILURE:
      return { ...state, activity: { error: action.error } };
    default:
      return state;
  }
};
