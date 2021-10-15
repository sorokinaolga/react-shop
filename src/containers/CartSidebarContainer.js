import React from 'react';
import { connect } from 'react-redux';

import CartSidebar from '../components/CartSidebar/CartSidebar';
import Button from '../components/Button/Button';
import { clearBasket, postBasket } from '../store/basket/actions';

const CartSidebarContainer = (props) => {
  const { items, clearBasket, postBasket, isSave, isError, isLoading, products } = props;

  const disabled = isLoading || !items.length;

  const handleClickSave = (evt) => {
    evt.preventDefault();
    postBasket(items);
  };

  const handleClickClear = (evt) => {
    evt.preventDefault();
    clearBasket();
  };

  return (
    <CartSidebar count={items.length} isSuccess={isSave} error={isError} products={products}>
      <Button value="Сохранить корзину" onClick={handleClickSave} disabled={disabled} />
      <Button value="Очистить корзину" onClick={handleClickClear} disabled={disabled} />
    </CartSidebar>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebarContainer);