import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Container } from './components/App';
import { toggleRefineReducer } from './redux/redux';
import './index.css';

const store = createStore(toggleRefineReducer);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>, document.getElementById('root'),
);
