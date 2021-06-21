import * as types from './types';

const initialState = {
  minPrice: 0,
  maxPrice: 0,
  discount: 0,
  categories: [],
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
      return {
          ...state,
          minPrice: 0,
          maxPrice: action.payload.value,
          discount: 0,
      };
    }
    default:
      return state;
  }
}

export default filtersReducer;