import React, {Component} from 'react';
import { connect } from 'react-redux';

import Cards from '../components/Cards/Cards';
import { getFilteredProducts } from '../utils';
import data from '../products.json';

const mapStateToProps = (state) => {
  return {
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    discount: state.discount,
    activeCategory: state.activeCategory,
  };
};

class CardsContainer extends Component {
    render() {
      const products = getFilteredProducts(
        data,
        this.props.minPrice,
        this.props.maxPrice,
        this.props.discount,
        this.props.activeCategory
      );
      return <Cards data={products} />;
    }
  }

export default connect(
    mapStateToProps, 
)(CardsContainer);