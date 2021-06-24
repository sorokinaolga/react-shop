import * as types from './types';

const changeFilter = (name, value) => ({ type: types.CHANGE_FILTER, payload: { name: name, value: value } });
const resetFilter = (value) => ({ type: types.RESET_FILTER, payload: { value: value } });

export { changeFilter, resetFilter };