import * as types from './types';

const toggleToBasket = (value) => ({
  type: types.TOGGLE_TO_BASKET,
  payload: value
});
const loadingBasket = () => ({
  type: types.LOADING_BASKET
});
const saveBasket = (value) => ({
  type: types.SAVE_BASKET,
  payload: value
});
const errorBasket = (value) => ({
  type: types.ERROR_BASKET,
  payload: value
});
const clearBasket = () => ({
  type: types.CLEAR_BASKET
});

const postBasket = (items) => {
  return (dispatch) => {
    dispatch(loadingBasket());
    fetch('https://run.mocky.io/v3/e7c2868e-8539-4f11-9e8e-3658416232d1', {
        method: 'POST',
        body: JSON.stringify(items),
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        dispatch(saveBasket(data.result));
      })
      .catch(error => {
        dispatch(errorBasket(error.toString()));
      });
  };
};

export {
  toggleToBasket,
  clearBasket,
  loadingBasket,
  saveBasket,
  errorBasket,
  postBasket
};
