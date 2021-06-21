import React, {Component} from 'react';

import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import style from './MainPage.module.css';

class MainPage extends Component {
  render() {
  const currentPage = +this.props.activePage || 1;
  return (
    <>
      {this.props.isLoading && !this.props.isError && 
        <Preloader />
      }
      {!this.props.isLoading && !this.props.isError && 
        <div className={style.app}>
          <header className={style.header}>  
            <Header title={ this.props.products.length > 0 ? 'Список товаров' : 'Товары не найдены' } />
          </header>
          <main className={style.content}>
            {this.props.products.length > 0 
              ? <>
                  <Cards products={this.props.products[currentPage - 1]} />
                  <Pagination activePage={currentPage} pages={this.props.products} activeCategory={this.props.activeCategory} />
                </>
              : <NotFound />              
            }
          </main>
          <section className={style.filters}>
            <Filter categories={this.props.categories}
                    activeCategory={this.props.activeCategory} 
                    changeFilter={this.props.changeFilter} 
                    resetFilter={this.props.resetFilter}
                    discount={this.props.discount} 
                    minPrice={this.props.minPrice}
                    maxPrice={this.props.maxPrice}
                    maxValuePrice={this.props.maxValuePrice} 
            />
          </section>
          <aside className={style.sidebar}></aside>
        </div>
      }
      {this.props.isLoading && this.props.isError &&
        <>
          <Header title='Что-то пошло не так' />
          <NotFound />
        </>
      }
    </>    
  )};
};

export default MainPage;