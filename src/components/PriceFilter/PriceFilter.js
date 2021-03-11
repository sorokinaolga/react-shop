
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PriceFilter.css';

class PriceFilter extends Component {
  constructor({props}) {
    super(props);

    this.filterMinPrice = React.createRef();
    this.filterMaxPrice = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const minValue = this.filterMinPrice.current.value >= 0 ? this.filterMinPrice.current.value : this.props.minPrice;
    const maxValue = this.filterMaxPrice.current.value >= 0 ? this.filterMaxPrice.current.value : this.props.maxPrice;

    this.props.changePrices(minValue, maxValue);
  }

  render() {
    return (
      <form className="filter" onSubmit={this.handleSubmit}>
        <h4 className="filter-title">{this.props.title}</h4>
        <div className="filter-row">
          <div className="filter-price">
            от <input type="text" defaultValue={this.props.minPrice} ref={this.filterMinPrice}/>
          </div>
          <div className="filter-price">
            до <input type="text" defaultValue={this.props.maxPrice} ref={this.filterMaxPrice}/>
          </div>
        </div>
        <button type="submit" className="filter-button">Применить</button>
      </form>
    )
  }

};

PriceFilter.propTypes = {
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
};

export default PriceFilter;