import React from 'react';
import ReactDOM from 'react-dom';
import product from './products.json';
import './index.css';

const selectProduct = product.slice(0, 3);

function App() {
  return (
    <div className="App">
      <h1>Список товаров</h1>
      <ProductsList product={selectProduct} />
    </div>
  );
}

class ProductsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.product.map(item => {
          return <ItemList key={item.id} product={item} />;
        })}
      </ul>
    );
  }
}

class ItemList extends React.Component {
  render() {
    return <li>{this.props.product.name}</li>;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
