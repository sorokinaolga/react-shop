import React from 'react';
import { Link } from 'react-router-dom';

import style from './ProductPage.module.css';

const ProductPageNotFound = (props) => {
    return (
        <div className={style.goods}>
            <div className={style.titleContainer}>
                <Link className={style.link} to="/">&#8592;</Link>
                <h1 className={style.title}>{props.title}</h1>
            </div>
            <div className={style.imgContainer}>

            </div>
        </div>
    );
};

export default ProductPageNotFound;