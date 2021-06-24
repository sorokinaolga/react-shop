import { connect } from 'react-redux';

import MainPage from '../components/MainPage/MainPage';
import { changeFilter, resetFilter } from '../store/filters/actions';
import { getProductSelector, getActiveCategory, getActivePage, getMinPrice, getMaxPrice, getDiscount, getCategories, getMaxValuePrice } from '../store/selectors';

const mapStateToProps = (state) => {
  return {
    products: getProductSelector(state),
    minPrice: getMinPrice(state),
    maxPrice: getMaxPrice(state),
    discount: getDiscount(state),
    categories: getCategories(state),
    activeCategory: getActiveCategory(state),
    activePage: getActivePage(state),
    maxValuePrice: getMaxValuePrice(state),
  };
};

const mapDispatchToProps = {
  changeFilter,
  resetFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);