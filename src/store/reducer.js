import { initialState } from './index';

export const CHANGE_FILTER = 'junior-course-os/app/CHANGE_FILTER';
export const RESET_FILTER = 'junior-course-os/app/RESET_FILTER';
export const SET_CATEGORY = 'junior-course-os/app/SET_CATEGORY';

export const changeFilter = (name, value) => ({ type: CHANGE_FILTER, payload: { name: name, value: value } });
export const resetFilter = () => ({ type: RESET_FILTER });

export function reducer(state, action) {
  switch (action.type) {
    case CHANGE_FILTER: {
      return {
          ...state,
          [action.payload.name]: action.payload.value,
      };
    }
    case RESET_FILTER: {
      return {
        ...initialState,
        activeCategory: '',
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        activeCategory: action.payload,
      };
    }
    default:
      return state;
  }
}