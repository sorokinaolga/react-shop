import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import products from './products.json';
import './index.css';
import MainTitle from './components/MainTitle/MainTitle';
import Cards from './components/Cards/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <MainTitle>Список товаров</MainTitle>
          <Cards data={products} />
        </main>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
