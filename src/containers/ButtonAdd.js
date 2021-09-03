import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button/Button';
import { toggleToBasket } from '../store/basket/actions';

const ButtonAdd = (props) => {
  const added = props.items.find(item => item === props.id);

  const handleClick = () => {
    if (added) {
      props.toggleToBasket(props.items.filter(item => item !== props.id));
    } else {
      props.toggleToBasket([...props.items, props.id]);
    }
  };

  const value = added ? 'Убрать' : 'Добавить';
  const disabled = props.isError || props.isLoading;

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