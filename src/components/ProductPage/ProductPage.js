import React from 'react';
import { Link } from 'react-router-dom';

import style from './ProductPage.module.css';
import RatingComponent from '../RatingComponent/RatingComponent';

const ProductPage = (props) => {
    const range = to => [...Array(to).keys()].map(i => i + 1);
    return (
        <div className={`${style.goods} ${!props.isInStock && style.goodsNone}`}>
            <div className={style.titleContainer}>
                <Link className={style.link} to="/">&#8592;</Link>
                <h1 className={style.title}>{props.title}</h1>
            </div>
            <div className={style.imgContainer}>
                <div className={`${style.goodsType} ${!props.isInStock && style.goodsTypeNone}`}>
                    {props.isInStock ? 'В наличии' : 'Недоступен'}
                </div>
                <img
                    className={`${style.goodsImg} ${!props.isInStock && style.goodsImgNone}`}
                    src={props.img}
                    alt={props.title}
                    width="224"
                    height="200"
                />
            </div>
            <div className={style.descriptionContainer}>
                <p className={style.goodsName}>{props.title}</p>
                <div>
                    {range(props.maxRating).map(i => React.createElement(RatingComponent, { key: i, isFilled:  i <= props.rating }))}
                </div>
                <div className={style.goodsPrise}>
                    {props.price}{props.subPriceContent}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;