import * as types from './types';
import {
  changeFilter
} from '../filters/actions';
import {
  maxBy,
  minBy
} from 'csssr-school-utils';
import {
  getCategories
} from '../../utils';

export const setSuccessLoading = (value) => ({
  type: types.SUCCESS_FETCH,
  payload: value
});
export const setStartLoading = () => ({
  type: types.START_FETCH
});
export const setErrorLoading = () => ({
  type: types.ERROR_FETCH
});

export const setFilters = (products) => {
  return dispatch => {
    dispatch(changeFilter('maxPrice', maxBy(item => item.price, products).price));
    dispatch(changeFilter('minPrice', minBy(item => item.price, products).price));
    dispatch(changeFilter('categories', getCategories(products)));
  };
};

export const fetchProducts = () => (dispatch) => {
  dispatch(setStartLoading());

  fetch('https://run.mocky.io/v3/a75795fc-0318-4001-b001-1b100a5f5a3f')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        dispatch(setErrorLoading(response.message))
      }
    })
    .then(data => {
      if (data.result === 'ERROR') {
        dispatch(setErrorLoading())
      } else {
        dispatch(setSuccessLoading(data.products))
        dispatch(setFilters(data.products));
      }
    })
    .catch(() => dispatch(setErrorLoading()))
};
