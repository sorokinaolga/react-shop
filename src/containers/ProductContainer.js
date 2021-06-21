import React, {Component} from 'react';
import { connect } from 'react-redux';
import {formatMoney} from 'csssr-school-utils';

import { getProductById, getLoadingStatus, getResponseStatus } from '../store/selectors';
import ProductPage from '../components/ProductPage/ProductPage';
import Preloader from '../components/Preloader/Preloader';
import NotFound from '../components/NotFound/NotFound';

class Product extends Component {
  render() {
    return (
      <>
        {this.props.isLoading && !this.props.isError && <Preloader />}
        {this.props.isLoading && this.props.isError && <NotFound title='Что-то пошло не так' />}
        {!this.props.isLoading && !this.props.isError && this.props.item &&
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
        {!this.props.isLoading && !this.props.isError && !this.props.item && <NotFound title='Товар не найден' />}
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