import 'babel-polyfill';
import 'babel-core/register';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import Provider from 'react-redux/lib/components/Provider';
import syncHistoryWithStore from 'react-router-redux/lib/sync';
import Home from './container/home/Home';
import store from './store';

injectTapEventPlugin();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>
  , document.getElementById('app')); // eslint-disable-line
