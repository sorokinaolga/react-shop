import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createdStore } from './store';
import App from './App';

const store = createdStore();

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
