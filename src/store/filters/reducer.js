import * as types from './types';
import {SUCCESS_FETCH} from '../products/types';
import { maxBy } from 'csssr-school-utils';

const initialState = {
  minPrice: 0,
  maxPrice: 0,
  discount: 0,
  categories: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FETCH: {
      return {
        ...state,
        maxValuePrice: maxBy(obj => obj.price, action.payload).price,
      };
    }
    case types.CHANGE_FILTER: {
      return {
          ...state,
          [action.payload.name]: action.payload.value,
      };
    }
    case types.RESET_FILTER: {
      return {
          ...state,
          minPrice: 0,
          maxPrice: state.maxValuePrice,
          discount: 0,
      };
    }
    default:
      return state;
  }
}

export default filtersReducer;