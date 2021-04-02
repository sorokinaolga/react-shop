import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {maxBy, minBy} from 'csssr-school-utils';

import data from './products.json';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Filter from './components/Filter/Filter';
import style from './index.module.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        filteredData: data,
        minPrice: minBy(obj => obj.price, data).price,
        maxPrice: maxBy(obj => obj.price, data).price,
        discount: 0,
    }
  }

  handleFilter = Filters => {
    this.setState(Filters, () => {
      this.changeFilter(this.state.minPrice, this.state.maxPrice, this.state.discount);
    })
  };

  changeFilter = (minValue, maxValue, discount) => {
    this.setState({
      filteredData: data.filter(item => {
        return item.price >= minValue && item.price <= maxValue * (1 - discount / 100);
      })
    });
  };
 
  render() {
    return (
      <div className={style.app}>
        <header className={style.header}>       
          <Header>Список товаров</Header>
        </header>
        <main className={style.content}>
          <Cards data={this.state.filteredData} />
        </main>
        <section className={style.filters}>
          <Filter
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice} 
            discount={this.state.discount}
            handleFilter={this.handleFilter}
          />
        </section>
        <aside className={style.sidebar}></aside>
      </div>
    );
  }

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
