import * as types from './types';

const changeFilter = (name, value) => ({ type: types.CHANGE_FILTER, payload: { name: name, value: value } });
const resetFilter = () => ({ type: types.RESET_FILTER });

export { changeFilter, resetFilter };