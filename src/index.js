import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createContext} from 'react';
import {maxBy, minBy} from 'csssr-school-utils';

import data from './products.json';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Filter from './components/Filter/Filter';
import style from './index.module.css';


export const DataContext = createContext();

function getCategories(products) {
  let categories = [];

  products.forEach(product => {
    if (!categories.find(category => category === product.category)) {
      categories.push(product.category);
    }
  });

  return categories;
}

const categories = getCategories(data);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredData: data,
      minPrice: minBy(obj => obj.price, data).price,
      maxPrice: maxBy(obj => obj.price, data).price,
      discount: 0,
      categories: categories,
      activeCategory: '',
    }
  }

  componentDidMount() {
    window.addEventListener('popstate', this.setHistoryCategory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setHistoryCategory);
  }

  setHistoryCategory = (event) => {
    this.setState({ activeCategory: event.state['url'] });
  };

  handleChangeInput = (name, value) => {
    this.setState({
      [name]: value,
    }, () => {
      this.getFilteredProducts(this.state.minPrice, this.state.maxPrice, this.state.discount, this.state.activeCategory);
    });
  };

  getFilteredProducts = (minValue, maxValue, discount, category) => {
    let products = data;
    if(category) {
      products = data.filter(item => item.category === category);
    }
    products = products.filter(item => item.price >= minValue && item.price <= maxValue * (1 - discount / 100));

    this.setState({filteredData: products});
  };

  handleResetInput = () => {
    this.setState({
      filteredData: data,
      minPrice: minBy(obj => obj.price, data).price,
      maxPrice: maxBy(obj => obj.price, data).price,
      discount: 0,
      categories: categories,
      activeCategory: '',
    });
    window.history.pushState({}, '', '/');
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          maxPrice: this.state.maxPrice,
          minPrice: this.state.minPrice,
          discount: this.state.discount,
          categories: categories,
          activeCategory: this.state.activeCategory,
          handleChangeInput: this.handleChangeInput,
          handleResetInput: this.handleResetInput,
        }}
      >
        <div className={style.app}>
          <header className={style.header}>       
            <Header>Список товаров</Header>
          </header>
          <main className={style.content}>
            <Cards data={this.state.filteredData} />
          </main>
          <section className={style.filters}>
            <Filter />
          </section>
          <aside className={style.sidebar}></aside>
        </div>
      </DataContext.Provider>
    );
  }

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
