import React, {Component} from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';

import { fetchProducts } from './store/products/actions';
import { history } from './store';
import Page from './containers/Page';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
        <ConnectedRouter history={history}>
          <Page />
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