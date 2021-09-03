import React, {Component} from 'react';
import { connect } from 'react-redux';
import {formatMoney} from 'csssr-school-utils';

import { getProductById } from '../store/selectors';
import ProductPage from '../components/ProductPage/ProductPage';
import NotFound from '../components/NotFound/NotFound';

class Product extends Component {
  render() {
    const productFound = this.props.item;

    return (
      <>
        {productFound &&
          <ProductPage 
            id={this.props.item.id}
            isInStock={this.props.item.isInStock}
            img={this.props.item.imgUrl}
            title={this.props.item.name}
            price={formatMoney(this.props.item.price, 0, '.', ' ')}
            subPriceContent={this.props.item.subPriceContent}
            maxRating={5}
            rating={this.props.item.rating}
          />
        }
        {!productFound && <NotFound title='Товар не найден' />}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = +props.match.params.id;
  return {
    item: getProductById(state, id),
  };
};

export default connect(mapStateToProps)(Product);