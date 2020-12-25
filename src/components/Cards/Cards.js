
import React from 'react';
import PropTypes from 'prop-types';
import {formatMoney} from 'csssr-school-utils';
import ProductItem from 'school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';

import './Cards.css';

const Cards = ({data}) => {

  if (data.length > 0) {
    return (
      <ul className="cards">
        {data.map((item) => {
          return (
            <li className="cards__item" key={item.id}>
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
      <span className="cards_empty">Ничего не найдено</span>
    )
  }
}


Cards.propTypes = {
  data: PropTypes.array
};

Cards.defaultProps = {
  data: []
};

export default Cards;
