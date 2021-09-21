import React from 'react';

import Header from '../Header/Header';
import style from './ErrorPage.module.css';
import image from '../../img/error.png';

const ErrorPage = (props) => {
    const { title } = props;

    return (
        <div className={style.app}>
            <header className={style.header}>  
                <Header>{title}</Header>
            </header>
            <main className={style.content}>
                <img src={image} alt='404' />
            </main>
        </div>
    )
}

export default ErrorPage;