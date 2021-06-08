import React, {Component} from 'react';
import { connect } from 'react-redux';

import Cards from '../components/Cards/Cards';
import { getProductSelector } from '../store/selectors';
import { changePage } from '../store/actions';
import data from '../products.json';
import Pagination from '../components/Pagination/Pagination';

class CardsContainer extends Component {
    render() {
      return (
        <>
          {this.props.products.length && this.props.activePage <= this.props.products.length 
          ? (<>
            <Cards products={this.props.products[this.props.activePage - 1]} />
            <Pagination activePage={this.props.activePage} pages={this.props.products} handleChangePage={this.props.changePage} />
          </>) 
          : (<p>Ничего не найдено</p>)}
        </>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    products: getProductSelector({
      minPrice: state.minPrice,
      maxPrice: state.maxPrice,
      discount: state.discount,
      activeCategory: state.activeCategory,
      data,
    }),
    activePage: state.activePage,
  };
};

const mapDispatchToProps = {
  changePage,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(CardsContainer);