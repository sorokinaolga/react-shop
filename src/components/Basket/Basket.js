import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Basket = (props) => {
  return (
    <div>
      <div>
        Корзина {props.count || 0}
        {props.isSuccess && <span>&#10004;</span>}
      </div>
      <div>{props.children}</div>
      <Link to="/cart">
        Перейти в корзину
      </Link>
      {props.error && (
        <div>
          <strong>Не удалось сохранить корзину:</strong> {props.error}
        </div>
      )}
    </div>
  );
};

Basket.propTypes = {
  count: PropTypes.number,
  isSuccess: PropTypes.bool,
  error: PropTypes.string,
};

export default Basket;