import { createSelector } from 'reselect';
import { splitEvery } from 'csssr-school-utils';

import { getFiltredProducts } from '../utils';

const getMinPrice = (state) => state.filters.minPrice;
const getMaxPrice = (state) => state.filters.maxPrice;
const getDiscount = (state) => state.filters.discount;
const getCategories = (state) => state.filters.categories;
const getActiveCategory = (state) => state.router.location.query.category;
const getActivePage = (state) => state.router.location.query.page;
const getAllProducts = (state) => state.products.items;
const getProductById = (state, id) => state.products.items.find(item => item.id === id);
const getLoadingStatus = (state) => state.products.isLoading;
const getResponseStatus = (state) => state.products.isError;
const getMaxValuePrice = (state) => state.products.maxValuePrice;

const getProductSelector = createSelector(
  getMinPrice,
  getMaxPrice,
  getDiscount,
  getActiveCategory,
  getAllProducts,
  (minPrice, maxPrice, discount, activeCategory, products, productsCount = 6) =>
    splitEvery(
      productsCount,
      getFiltredProducts(minPrice, maxPrice, discount, activeCategory, products)
    )
);

export { getProductSelector, getProductById, getActiveCategory, getActivePage, getMinPrice, getMaxPrice, getDiscount, getCategories, getLoadingStatus, getResponseStatus, getMaxValuePrice };