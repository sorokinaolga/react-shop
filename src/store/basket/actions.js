import * as types from './types';

const toggleToBasket = (value) => ({ type: types.TOGGLE_TO_BASKET, payload: value });
const loadingBasket = () => ({ type: types.LOADING_BASKET });
const saveBasket = (value) => ({ type: types.SAVE_BASKET, payload: value });
const errorBasket = (value) => ({ type: types.ERROR_BASKET, payload: value });
const clearBasket = () => ({ type: types.CLEAR_BASKET });

const postBasket = (items) => {
    return (dispatch) => {
        dispatch(loadingBasket());
        fetch('https://course-api.school.csssr.com/save', {
            method: 'POST',
            body: JSON.stringify(items),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
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

export { toggleToBasket, clearBasket, loadingBasket, saveBasket, errorBasket, postBasket };