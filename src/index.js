import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {maxBy, minBy} from 'csssr-school-utils';
import data from './products.json';
import MainTitle from './components/MainTitle/MainTitle';
import Cards from './components/Cards/Cards';
import PriceFilter from './components/PriceFilter/PriceFilter';

import './index.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        filteredData: data,
        minPrice: minBy(obj => obj.price, data).price,
        maxPrice: maxBy(obj => obj.price, data).price
    }
  }

  changePrices = (minValue, maxValue) => {
    this.setState({
      filteredData: data.filter((item) => {
          return item.price >= minValue && item.price <= maxValue;
      })
    });
  }
  
  render() {
    return (
      <div className="App">
        <MainTitle>Список товаров</MainTitle>
        <div className="container">
          <aside>
            <PriceFilter 
                        minPrice={this.state.minPrice}
                        maxPrice={this.state.maxPrice} 
                        changePrices={this.changePrices}
                        title="Цена"/>
          </aside>
          <main>
            <Cards data={this.state.filteredData} />
          </main>
        </div>
      </div>
    );
  }

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
