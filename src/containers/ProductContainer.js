import React, {Component} from 'react';
import { connect } from 'react-redux';
import {formatMoney} from 'csssr-school-utils';

import { getProductById, getLoadingStatus, getResponseStatus } from '../store/selectors';
import ProductPage from '../components/ProductPage/ProductPage';
import Preloader from '../components/Preloader/Preloader';
import NotFound from '../components/NotFound/NotFound';

class Product extends Component {
  render() {
    const loading = this.props.isLoading && !this.props.isError;
    const error = this.props.isLoading && this.props.isError;
    const success = !this.props.isLoading && !this.props.isError;
    const productFound = this.props.item;

    return (
      <>
        {loading && <Preloader />}
        {error && <NotFound title='Что-то пошло не так' />}
        {success && productFound &&
          <ProductPage 
            isInStock={this.props.item.isInStock}
            img={this.props.item.imgUrl}
            title={this.props.item.name}
            price={formatMoney(this.props.item.price, 0, '.', ' ')}
            subPriceContent={this.props.item.subPriceContent}
            maxRating={5}
            rating={this.props.item.rating}
          />
        }
        {success && !productFound && <NotFound title='Товар не найден' />}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = +props.match.params.id;
  return {
    item: getProductById(state, id),
    isLoading: getLoadingStatus(state),
    isError: getResponseStatus(state),
  };
};

export default connect(mapStateToProps)(Product);