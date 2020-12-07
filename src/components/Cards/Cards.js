import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import './Cards.css';

const Cards = ({ data }) => {
  return (
    <ul className="cards">
      {data.map(item => {
        return (
          <li className="cards__item">
            <ProductItem
              isInStock={item.isInStock}
              img={item.imgUrl}
              title={item.name}
              price={item.price}
              subPriceContent={item.subPriceContent}
              maxRating={5}
              rating={item.rating}
              ratingComponent={RatingComponent}
            />
          </li>
        );
      })}
    </ul>
  );
};

Cards.propTypes = {
  data: PropTypes.array
};

Cards.defaultProps = {
  data: []
};

export default Cards;
