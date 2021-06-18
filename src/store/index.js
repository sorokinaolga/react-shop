import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import filtersReducer from './filters/reducer';

export const history = createBrowserHistory();

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    filters: filtersReducer,
  });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function createdStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}