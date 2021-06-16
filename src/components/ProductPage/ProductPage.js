import React from 'react';
import { Link } from 'react-router-dom';

import style from './ProductPage.module.css';
import RatingComponent from '../RatingComponent/RatingComponent';
import products from '../../products.json';

const ProductPage = (props) => {

    const id = +props.match.params.id;
    const product = products.find(item => item.id === id);
    const range = to => [...Array(to).keys()].map(i => i + 1);
    const maxRating = 5;

    return (
        <>
        {product 
            ? (<div className={`${style.goods} ${!props.isInStock && style.goodsNone}`}>
                <div className={style.titleContainer}>
                    <Link className={style.link} to="/">&#8592;</Link>
                    <h1 className={style.title}>{product.name}</h1>
                </div>
                <div className={style.imgContainer}>
                    <div className={`${style.goodsType} ${!product.isInStock && style.goodsTypeNone}`}>
                        {product.isInStock ? 'В наличии' : 'Недоступен'}
                    </div>
                    <img
                        className={`${style.goodsImg} ${!product.isInStock && style.goodsImgNone}`}
                        src={product.imgUrl}
                        alt={product.name}
                        width="224"
                        height="200"
                    />
                </div>
                <div className={style.descriptionContainer}>
                    <p className={style.goodsName}>{product.name}</p>
                    <div>
                        { range(maxRating).map(i => React.createElement(RatingComponent, { key: i, isFilled:  i <= product.rating })) }
                    </div>
                    <div className={style.goodsPrise}>
                        {product.price}{product.subPriceContent}
                    </div>
                </div>
            </div>)
            : (
                <div className={style.goods}>
                    <div className={style.titleContainer}>
                        <Link className={style.link} to="/">&#8592;</Link>
                        <h1 className={style.title}>Товар не найден</h1>
                    </div>
                    <div className={style.imgContainer}>

                    </div>
                </div>
            )}
        </>
    );
};

export default ProductPage;