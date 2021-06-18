import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import MainPage from './components/MainPage/MainPage';
import Product from './containers/ProductContainer';
import { createdStore, history } from './store';

const store = createdStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/:id" component={Product} />
            </Switch>
          </ConnectedRouter>
        </Provider>
    );
  }

}

export default App;