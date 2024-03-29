import * as types from './types';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_FETCH: {
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.START_FETCH: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ERROR_FETCH: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

export default productsReducer;