import * as types from './types';

const initialState = {
  items: [],
  isSave: false,
  isLoading: false,
  isError: '',
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_TO_BASKET: {
      return {
        ...state,
        items: action.payload,
        isSave: false,
      };
    }

    case types.CLEAR_BASKET: {
      return {
        ...state,
        isSave: false,
        items: [],
      };
    }

    case types.SAVE_BASKET: {
      return {
        ...state,
        isSave: true,
        isLoading: false,
      };
    }

    case types.LOADING_BASKET: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.ERROR_BASKET: {
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    }

    default:
      return state;
  }
}

export default basketReducer;