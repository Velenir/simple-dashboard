import * as TYPES from './types';
import { fetchUserData } from '../../api';

export const actionCreator = () => ({
  type: TYPES.SOME_ACTION
});

export const openModalAddWidget = () => ({
  type: TYPES.OPEN_MODAL_ADD_WIDGET
});

export const saveModalAddWidget = () => ({
  type: TYPES.SAVE_MODAL_ADD_WIDGET
});

export const cancelModal = () => ({
  type: TYPES.CANCEL_MODAL
});

export const openModalEditWidget = (id) => ({
  type: TYPES.OPEN_MODAL_EDIT_WIDGET,
  payload: { id }
});

export const saveModalEditWidget = () => ({
  type: TYPES.SAVE_MODAL_EDIT_WIDGET
});

export const addWidget = (id) => ({
  type: TYPES.ADD_WIDGET,
  payload: { id }
});

export const removeWidget = (id) => ({
  type: TYPES.REMOVE_WIDGET,
  payload: { id }
});

export const removeWidgetImmediately = (id) => ({
  type: TYPES.REMOVE_WIDGET_IMMEDIATELY,
  payload: { id }
});

export const changeActivityPeriod = (id, activityPeriod) => ({
  type: TYPES.CHANGE_ACTIVITY_PERIOD,
  payload: { id, activityPeriod }
});

export const changeAddWidgetTab = (active) => ({
  type: TYPES.CHANGE_ADD_WIDGET_TAB,
  payload: { active }
});

export const changeAddWidgetFilter = (filter) => ({
  type: TYPES.CHANGE_ADD_WIDGET_FILTER,
  payload: { filter }
});

export const changeEditWidgetSetting = (id, key, value) => ({
  type: TYPES.CHANGE_EDIT_WIDGET_SETTING,
  payload: { id, key, value }
});

export const fetchStart = (id, path) => ({
  type: TYPES.FETCH_START,
  payload: { id, path }
});

export const fetchSuccess = (id, path, data) => ({
  type: TYPES.FETCH_SUCCESS,
  payload: { id, path, data }
});

export const fetchFailure = (id, path, error) => ({
  type: TYPES.FETCH_FAILURE,
  error,
  payload: { id, path, error }
});

export const getUserActivity = (id, path) => async (dispatch) => {
  dispatch(fetchStart(id, path));

  try {
    const data = await fetchUserData();
    dispatch(fetchSuccess(id, path, data));
    return Promise.resolve({ data, id });
  } catch (error) {
    dispatch(fetchFailure(id, path, error));
    return Promise.reject({ error, id });
  }

  // return fetchUserData.then(
  //   data => dispatch(fetchSuccess(data, id)),
  //   error => dispatch(fetchFailure(error, id))
  // );
};

export const moveWidget = (id, position) => ({
  type: TYPES.MOVE_WIDGET,
  payload: { id, position }
});
