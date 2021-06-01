import { initialState } from './index';

import * as types from './types';

const reducer = (state, action) => {
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
    case types.SET_CATEGORY: {
      return {
        ...state,
        activeCategory: action.payload,
      };
    }
    case types.CHANGE_PAGE:
      return {
        ...state,
        activePage: action.payload,
    }
    default:
      return state;
  }
}

export default reducer;