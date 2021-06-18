import React from 'react';

import Header from '../Header/Header';
import { FilterContainer } from '../../containers/FilterContainer';
import CardsContainer from '../../containers/CardsContainer';
import style from './MainPage.module.css';

const MainPage = () => {
  return (
      <div className={style.app}>
        <header className={style.header}>  
          <Header>Список товаров</Header>
        </header>
        <main className={style.content}>
          <CardsContainer />
        </main>
        <section className={style.filters}>
          <FilterContainer />
        </section>
        <aside className={style.sidebar}></aside>
      </div>
  );
};

export default MainPage;
