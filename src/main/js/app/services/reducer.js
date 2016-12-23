import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tip from './tip/tip';
import progress from './progerss';

export default combineReducers({
  routing,
  tip,
  progress,
});
