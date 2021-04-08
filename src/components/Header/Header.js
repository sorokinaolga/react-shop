
import React from 'react';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Header.module.css';

const Header = ({children}) => {
    return <h1 className={style.title}>{children}</h1>;
}

export default logRenderComponent(Header);
