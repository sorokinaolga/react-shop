import React from 'react';
import { Link } from 'react-router-dom';

import style from './ProductPage.module.css';
import RatingComponent from '../RatingComponent/RatingComponent';
import Header from '../Header/Header';
import ButtonAdd from '../../containers/ButtonAdd';

const ProductPage = (props) => {
    const { isInStock, title, img, maxRating, rating, price, subPriceContent, id } = props;

    const range = to => [...Array(to).keys()].map(i => i + 1);

    return (
        <div className={style.goods}>
            <header className={style.titleContainer}>
                <Header>
                    <Link className={style.link} to="/">&#8592;</Link>
                    {title}
                </Header>
            </header>
            <div className={style.imgContainer}>
                <div className={`${style.goodsType} ${!isInStock && style.goodsTypeNone}`}>
                    {isInStock ? 'В наличии' : 'Недоступен'}
                </div>
                <img
                    className={`${style.goodsImg} ${!isInStock && style.goodsImgNone}`}
                    src={img}
                    alt={title}
                    width="224"
                    height="200"
                />
            </div>
            <div className={style.descriptionContainer}>
                <p className={style.goodsName}>{title}</p>
                <div>
                    {range(maxRating).map(i => React.createElement(RatingComponent, { key: i, isFilled:  i <= rating }))}
                </div>
                <div className={style.goodsPrise}>
                    {price}{subPriceContent}
                </div>
                <ButtonAdd id={id} />
            </div>
        </div>
    );
};

export default ProductPage;