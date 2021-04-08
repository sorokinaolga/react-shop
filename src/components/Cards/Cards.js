
import React from 'react';
import PropTypes from 'prop-types';
import {formatMoney} from 'csssr-school-utils';
import ProductItem from 'school-product-card';

import RatingComponent from '../RatingComponent/RatingComponent';
import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Cards.module.css';

const Cards = ({data}) => {

  if (data.length > 0) {
    return (
      <ul className={style.cards}>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <ProductItem
                isInStock={item.isInStock}
                img={item.imgUrl}
                title={item.name}
                price={formatMoney(item.price, 0, '.', ' ')}
                subPriceContent={item.subPriceContent}
                maxRating={5}
                rating={item.rating}
                ratingComponent={RatingComponent}
              />
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <span>Ничего не найдено</span>
    )
  }
}


Cards.propTypes = {
  data: PropTypes.array
};

Cards.defaultProps = {
  data: []
};

export default logRenderComponent(Cards);
