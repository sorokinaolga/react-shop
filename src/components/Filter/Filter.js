
import React from 'react';

import logRenderComponent from '../../hocs/logRenderComponent';
import InputDiscount from '../InputDiscount/InputDiscount';
import PriceFilter from '../PriceFilter/PriceFilter';
import Categories from '../Categories/Categories';
import Button from '../Button/Button';

class Filter extends React.PureComponent {
  resetButtonClickHandler = () => {
    window.history.pushState({}, '', '/');
    this.props.resetFilter();
  };

  render() {
    return (
      <form>
        <PriceFilter title="Цена" 
                            minPrice={this.props.minPrice}
                            maxPrice={this.props.maxPrice} 
                            handleChangeInput={this.props.changeFilter} />
        <InputDiscount title="Скидка" 
                            name="discount" 
                            value={this.props.discount} 
                            onChange={this.props.changeFilter} />
        <Categories title="Категории"
                          categories={this.props.categories}
                          activeCategory={this.props.activeCategory} 
                          handleChangeInput={this.props.changeFilter} />
        <Button value="Сбросить фильтры" onClick={this.resetButtonClickHandler} />
      </form>
    )  
  }
};


export default logRenderComponent(Filter);