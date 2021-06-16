import { connect } from 'react-redux';

import { changeFilter, resetFilter } from '../store/filters/actions';
import Filter from '../components/Filter/Filter';

const mapStateToProps = (state) => {
  return {
    minPrice: state.filters.minPrice,
    maxPrice: state.filters.maxPrice,
    discount: state.filters.discount,
    categories: state.filters.categories,
    activeCategory: state.router.location.query.category,
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
