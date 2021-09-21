import React, {Component} from 'react';
import { connect } from 'react-redux';
import {formatMoney} from 'csssr-school-utils';

import { getProductById } from '../store/selectors';
import ProductPage from '../components/ProductPage/ProductPage';
import NotFound from '../components/NotFound/NotFound';
import imgProduct from '../img/product.jpg';

class Product extends Component {
  render() {
    const { id, status, name, price, subPriceContent, stars } = this.props.item;

    return (
      <>
        {this.props.item &&
          <ProductPage 
            id={id}
            isInStock={status === 'IN_STOCK'}
            img={imgProduct}
            title={name}
            price={formatMoney(price, 0, '.', ' ')}
            subPriceContent={subPriceContent}
            maxRating={5}
            rating={stars}
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