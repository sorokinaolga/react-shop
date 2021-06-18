import { connect } from 'react-redux';

import { changeFilter, resetFilter } from '../store/filters/actions';
import Filter from '../components/Filter/Filter';
import { getActiveCategory, getMinPrice, getMaxPrice, getDiscount, getCategories } from '../store/selectors';

const mapStateToProps = (state) => {
  return {
    minPrice: getMinPrice(state),
    maxPrice: getMaxPrice(state),
    discount: getDiscount(state),
    activeCategory: getActiveCategory(state),
    categories: getCategories(state),
  };
};

const mapDispatchToProps = {
  changeFilter,
  resetFilter,
};

export const FilterContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Filter);
