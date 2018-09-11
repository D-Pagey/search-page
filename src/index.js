import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Container } from './components/App';
import { queryParamsReducer } from './redux/redux';
import './index.css';

/* eslint-disable */
const store = createStore(
  queryParamsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>, document.getElementById('root'),
);
