import React from 'react';
import { connect } from 'react-redux';

import Basket from '../components/Basket/Basket';
import Button from '../components/Button/Button';
import { clearBasket, postBasket } from '../store/basket/actions';

const BasketContainer = (props) => {
  const { items, clearBasket, postBasket, isSave, isError, isLoading } = props;

  const disabled = isError || isLoading || !items.length;

  const handleClickSave = (evt) => {
    evt.preventDefault();
    postBasket(items);
  };

  const handleClickClear = (evt) => {
    evt.preventDefault();
    clearBasket();
  };

  return (
    <Basket count={items.length} isSuccess={isSave} error={isError}>
      {!isSave && <Button value="Сохранить корзину" onClick={handleClickSave} disabled={disabled} /> }
      {isSave && <Button value="Очистить корзину" onClick={handleClickClear} disabled={disabled} /> }
    </Basket>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.basket.items,
    isSave: state.basket.isSave,
    isError: state.basket.isError,
    isLoading: state.basket.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearBasket: () => dispatch(clearBasket()),
    postBasket: (value) => dispatch(postBasket(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);