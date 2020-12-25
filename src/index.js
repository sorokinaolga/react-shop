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
  
  render() {

    const {minPrice, maxPrice, filteredData} = this.state;

    return (
      <div className="App">
        <MainTitle>Список товаров</MainTitle>
        <div className="container">
          <aside>
            <PriceFilter minPrice={minPrice}
                         maxPrice={maxPrice} 
                         priceFilterData={this.priceFilterData}
                         title="Цена"/>
          </aside>
          <main>
            <Cards data={filteredData} />
          </main>
        </div>
      </div>
    );
  }

  priceFilterData = (min, max) => {
    const minValue = min >= 0 ? min : this.state.minPrice;
    const maxValue = max >= 0 ? max : this.state.maxPrice;

    this.setState({
        filteredData: data.filter((item) => {
            return item.price >= minValue && item.price <= maxValue;
        })
    });
  }

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
