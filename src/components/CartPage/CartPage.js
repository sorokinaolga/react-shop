import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Cards from '../Cards/Cards';
import CartSidebarContainer from '../../containers/CartSidebarContainer';
import style from './CartPage.module.css';

class CartPage extends Component {
  render() {
    const { cartProducts } = this.props;
    
    return (
      <div className={style.app}>
        <header className={style.header}>
          <h1>
            <Link className={style.link} to="/">&#8592;</Link>
            {cartProducts.length > 0 ? 'Корзина' : 'Корзина пуста'}
          </h1>
        </header>
        <main className={style.content}>
          {cartProducts.length > 0 
            ? <Cards products={cartProducts} />
            : ''
          }
        </main>
        <section className={style.filters}>
        </section>
        <aside className={style.sidebar}>
          <CartSidebarContainer products={cartProducts} />
        </aside>
      </div>  
  )};
};

export default CartPage;