// import { combineReducers } from 'redux';
import combineReducers from './combineReducers';
import asyncData from './asyncData';
import panels from './panels';
import widgets from './widgets';
import modal from './modal';
import adding from './adding';
import editing from './editing';

export default combineReducers({
  asyncData,
  panels,
  widgets,
  modal,
  adding,
  editing
});
