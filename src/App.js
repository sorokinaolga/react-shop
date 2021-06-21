import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';

import { fetchProducts } from './store/products/actions';
import Product from './containers/ProductContainer';
import { history } from './store';
import MainContainer from './containers/MainContainer';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={MainContainer} />
            <Route path="/:id" component={Product} />
          </Switch>
        </ConnectedRouter>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    state,
  }
}

const mapDispatchToProps = {
  fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);