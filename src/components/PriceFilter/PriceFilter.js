
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './PriceFilter.css';

class PriceFilter extends Component {
  constructor({props}) {
    super(props);

    this.filterMinPrice = React.createRef();
    this.filterMaxPrice = React.createRef();
  }

  render() {
    const {maxPrice, minPrice, title} = this.props;

    return (
      <form className="filter" onSubmit={this.handleSubmit}>
        <h4 className="filter-title">{title}</h4>
        <div className="filter-row">
          <div className="filter-price">
            от <input type="text" defaultValue={minPrice} ref={this.filterMinPrice}/>
          </div>
          <div className="filter-price">
            до <input type="text" defaultValue={maxPrice} ref={this.filterMaxPrice}/>
          </div>
        </div>
        <button type="submit" className="filter-button">Применить</button>
      </form>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.priceFilterData(this.filterMinPrice.current.value, this.filterMaxPrice.current.value);
  }
};

PriceFilter.propTypes = {
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
};

export default PriceFilter;