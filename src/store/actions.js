import { store } from './index';
import * as types from './types';

const changeFilter = (name, value) => store.dispatch({ type: types.CHANGE_FILTER, payload: { name: name, value: value } });
const resetFilter = () => store.dispatch({ type: types.RESET_FILTER });
const setCategory = (category) => store.dispatch({ type: types.SET_CATEGORY, payload: category });
const changePage = (pageNumber) => store.dispatch({ type: types.CHANGE_PAGE, payload: pageNumber});

export { changeFilter, resetFilter, setCategory, changePage };