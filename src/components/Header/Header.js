import React from 'react';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Header.module.css';

const Header = (props) => {
    const { children } = props;

    return <h1 className={style.title}>{children}</h1>;
}

export default logRenderComponent(Header);
