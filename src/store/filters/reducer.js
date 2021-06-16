import * as types from './types';
import { maxBy, minBy } from 'csssr-school-utils';
import data from '../../products.json';
import { getCategories } from '../../utils';

const minPrice = minBy(obj => obj.price, data).price;
const maxPrice = maxBy(obj => obj.price, data).price;
const categories = getCategories(data);

const initialState = {
  minPrice,
  maxPrice,
  discount: 0,
  categories,
  products: data,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_FILTER: {
      return {
          ...state,
          [action.payload.name]: action.payload.value,
      };
    }
    case types.RESET_FILTER: {
      return initialState;
    }
    default:
      return state;
  }
}

export default filtersReducer;