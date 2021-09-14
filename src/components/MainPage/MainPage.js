import React, {Component} from 'react';

import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import NotFound from '../NotFound/NotFound';
import Cards from '../Cards/Cards';
import BasketContainer from '../../containers/BasketContainer';
import Pagination from '../Pagination/Pagination';
import style from './MainPage.module.css';

class MainPage extends Component {
  render() {
    const { activePage, products, activeCategory, categories, changeFilter, resetFilter, discount, minPrice, maxPrice } = this.props;
      
    const currentPage = +activePage || 1;

    return (
      <>
        <div className={style.app}>
          <header className={style.header}>  
            <Header children={products.length > 0 ? 'Список товаров' : 'Товары не найдены'} />
          </header>
          <main className={style.content}>
            {products.length > 0 
              ? <>
                  <Cards products={products[currentPage - 1]} />
                  <Pagination activePage={currentPage} pages={products} activeCategory={activeCategory} />
                </>
              : <NotFound />              
            }
          </main>
          <section className={style.filters}>
            <Filter categories={categories}
                    activeCategory={activeCategory} 
                    changeFilter={changeFilter} 
                    resetFilter={resetFilter}
                    discount={discount} 
                    minPrice={minPrice}
                    maxPrice={maxPrice}
            />
          </section>
          <aside className={style.sidebar}>
            <BasketContainer />
          </aside>
        </div>
      </>    
  )};
};

export default MainPage;