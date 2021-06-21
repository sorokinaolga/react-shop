import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import filtersReducer from './filters/reducer';
import productsReducer from './products/reducer';

export const history = createBrowserHistory();

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    filters: filtersReducer,
    products: productsReducer,
  });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function createdStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
  );

  return store;
}