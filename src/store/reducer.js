import { initialState, store } from './index';

const CHANGE_FILTER = 'junior-course-os/app/CHANGE_FILTER';
const RESET_FILTER = 'junior-course-os/app/RESET_FILTER';
const SET_CATEGORY = 'junior-course-os/app/SET_CATEGORY';

export const changeFilter = (name, value) => store.dispatch({ type: CHANGE_FILTER, payload: { name: name, value: value } });
export const resetFilter = () => store.dispatch({ type: RESET_FILTER });
export const setCategory = (category) => store.dispatch({ type: SET_CATEGORY, payload: category });

export function reducer(state, action) {
  switch (action.type) {
    case CHANGE_FILTER: {
      return {
          ...state,
          [action.payload.name]: action.payload.value,
      };
    }
    case RESET_FILTER: {
      return initialState;
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