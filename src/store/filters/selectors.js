import { createSelector } from 'reselect';
import { splitEvery } from 'csssr-school-utils';

import { getFiltredProducts } from '../../utils';

const getProductSelector = createSelector(
  ({minPrice}) => minPrice,
  ({maxPrice}) => maxPrice,
  ({discount}) => discount,
  ({activeCategory}) => activeCategory,
  ({data}) => data,
  (minPrice, maxPrice, discount, activeCategory, data, productsCount = 6) =>
    splitEvery(
      productsCount,
      getFiltredProducts(minPrice, maxPrice, discount, activeCategory, data)
    )
);

export { getProductSelector };