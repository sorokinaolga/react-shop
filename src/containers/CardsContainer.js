import React, {Component} from 'react';
import { connect } from 'react-redux';

import Cards from '../components/Cards/Cards';
import { getProductSelector } from '../store/filters/selectors';
import data from '../products.json';
import Pagination from '../components/Pagination/Pagination';

class CardsContainer extends Component {
    render() {
      const currentPage = +this.props.activePage || 1;
      return (
        <>
          {this.props.products.length
          ? (<>
            <Cards products={this.props.products[currentPage - 1]} />
            <Pagination activePage={currentPage} pages={this.props.products} activeCategory={this.props.activeCategory} />
          </>) 
          : (<p>Ничего не найдено</p>)}
        </>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    products: getProductSelector({
      minPrice: state.filters.minPrice,
      maxPrice: state.filters.maxPrice,
      discount: state.filters.discount,
      activeCategory: state.router.location.query.category,
      data,
    }),
    activeCategory: state.router.location.query.category,
    activePage: state.router.location.query.page,
  };
};

export default connect(mapStateToProps)(CardsContainer);