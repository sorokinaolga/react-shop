import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Basket = (props) => {
  const { count, isSuccess, children, error } = props;
  
  return (
    <div>
      <div>
        Корзина {count || 0}
        {isSuccess && <span>&#10004;</span>}
      </div>
      <div>{children}</div>
      <Link to="/cart">
        Перейти в корзину
      </Link>
      {error && (
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