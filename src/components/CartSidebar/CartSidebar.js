import React from 'react';
import PropTypes from 'prop-types';
import {formatMoney} from 'csssr-school-utils';

import { getTotalProductsPrice } from '../../utils';

const CartSidebar = (props) => {
  const { count, isSuccess, children, error, products } = props;
  const totalPrice = getTotalProductsPrice(products);
  
  return (
    <div>
      <div>
        Корзина
        {isSuccess && <span>&#10004;</span>}
      </div>
      <p>Товаров: {count || 0}</p>
      <p>Всего: {formatMoney(totalPrice, 0, '', ' ')} &#8381;</p>
      <div>{children}</div>
      {error && (
        <div>
          <strong>Не удалось сохранить корзину:</strong> {props.error}
        </div>
      )}
    </div>
  );
};

CartSidebar.propTypes = {
  count: PropTypes.number,
  isSuccess: PropTypes.bool,
  error: PropTypes.string,
};

export default CartSidebar;