import React, {Component} from 'react';
import { connect } from 'react-redux';

import Cards from '../components/Cards/Cards';
import { getProductSelector, getActiveCategory, getActivePage } from '../store/selectors';
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
    products: getProductSelector(state),
    activeCategory: getActiveCategory(state),
    activePage: getActivePage(state),
  };
};

export default connect(mapStateToProps)(CardsContainer);