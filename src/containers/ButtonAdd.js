import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button/Button';
import { toggleToBasket } from '../store/basket/actions';

const ButtonAdd = (props) => {
  const { items, id, toggleToBasket, isError, isLoading } = props;

  const added = items.find(item => item === id);

  const handleClick = () => {
    if (added) {
      toggleToBasket(items.filter(item => item !== id));
    } else {
      toggleToBasket([...items, id]);
    }
  };

  const value = added ? 'Убрать' : 'Добавить';
  const disabled = isError || isLoading;

  return <Button value={value} onClick={handleClick} disabled={disabled} />;
};

const mapStateToprops = (state) => {
  return {
    items: state.basket.items,
    isError: state.basket.isError,
    isLoading: state.basket.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleToBasket: value => dispatch(toggleToBasket(value)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(ButtonAdd);