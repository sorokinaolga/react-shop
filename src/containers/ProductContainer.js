import React, {Component} from 'react';
import { connect } from 'react-redux';
import {formatMoney} from 'csssr-school-utils';

import { getProductById } from '../store/selectors';
import ProductPage from '../components/ProductPage/ProductPage';
import NotFound from '../components/NotFound/NotFound';

class Product extends Component {
  render() {
    const { id, isInStock, imgUrl, name, price, subPriceContent, rating } = this.props.item;

    return (
      <>
        {this.props.item &&
          <ProductPage 
            id={id}
            isInStock={isInStock}
            img={imgUrl}
            title={name}
            price={formatMoney(price, 0, '.', ' ')}
            subPriceContent={subPriceContent}
            maxRating={5}
            rating={rating}
          />
        }
        {!this.props.item && <NotFound title='Товар не найден' />}
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