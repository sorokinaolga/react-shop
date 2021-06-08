import { connect } from 'react-redux';

import { changeFilter, resetFilter } from '../store/actions';
import Filter from '../components/Filter/Filter';

const mapStateToProps = (state) => {
  return {
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    discount: state.discount,
    categories: state.categories,
    activeCategory: state.activeCategory,
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
