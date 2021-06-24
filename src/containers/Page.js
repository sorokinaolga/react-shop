import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getLoadingStatus, getResponseStatus } from '../store/selectors';
import Product from './ProductContainer';
import MainContainer from './MainContainer';
import Preloader from '../components/Preloader/Preloader';
import ErrorPage from '../components/ErrorPage/ErrorPage';

class Page extends Component {
  render() {
    const loading = this.props.isLoading && !this.props.isError;
    const error = this.props.isLoading && this.props.isError;
    const success = !this.props.isLoading && !this.props.isError;

    return (
      <>
        {loading && <Preloader />}
        {error && <ErrorPage title='Что-то пошло не так' />}
        {success && 
          <Switch>
            <Route path="/" exact component={MainContainer} />
            <Route path="/:id" component={Product} />
          </Switch>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: getLoadingStatus(state),
    isError: getResponseStatus(state),
  };
};

export default connect(mapStateToProps)(Page);