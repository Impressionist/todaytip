import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './services/reducer';
import middlewares from './middlewares/index';

const composers = compose(
  applyMiddleware(...middlewares),
);
const store = createStore(reducers, undefined, composers);

export default store;
