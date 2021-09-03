import React from 'react';
import PropTypes from 'prop-types';
import {formatMoney} from 'csssr-school-utils';
import ProductItem from 'school-product-card';
import { Link } from 'react-router-dom';

import RatingComponent from '../RatingComponent/RatingComponent';
import ButtonAdd from '../../containers/ButtonAdd';
import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Cards.module.css';

const Cards = (props) => {
  return (
    <ul className={style.cards}>
      {props.products.map((item) => {
        return (
          <li key={item.id}>
            <Link className={style.cardLink} to={`/product/${item.id}`}>
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
            </Link>
            <ButtonAdd id={item.id} />
          </li>
        )
      })}
    </ul>
  )
}

Cards.propTypes = {
  products: PropTypes.array
};

Cards.defaultProps = {
  products: []
};

export default logRenderComponent(Cards);
