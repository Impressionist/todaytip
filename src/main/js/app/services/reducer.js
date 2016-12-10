import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tip from './tip/tip';

export default combineReducers({
  routing,
  tip,
});