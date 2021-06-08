import * as types from './types';

const changeFilter = (name, value) => ({ type: types.CHANGE_FILTER, payload: { name: name, value: value } });
const resetFilter = () => ({ type: types.RESET_FILTER });
const setCategory = (category) => ({ type: types.SET_CATEGORY, payload: category });
const changePage = (pageNumber) => ({ type: types.CHANGE_PAGE, payload: pageNumber});

export { changeFilter, resetFilter, setCategory, changePage };