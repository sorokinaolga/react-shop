import React from 'react';

import logRenderComponent from '../../hocs/logRenderComponent';
import InputDiscount from '../InputDiscount/InputDiscount';
import PriceFilter from '../PriceFilter/PriceFilter';
import Categories from '../Categories/Categories';
import Button from '../Button/Button';

class Filter extends React.PureComponent { 
  render() {
    const { minPrice, maxPrice, changeFilter, discount, categories, activeCategory, resetFilter } = this.props;

    return (
      <form>
        <PriceFilter title='Цена' 
                            minPrice={minPrice}
                            maxPrice={maxPrice} 
                            handleChangeInput={changeFilter} />
        <InputDiscount title='Скидка' 
                            name="discount" 
                            value={discount} 
                            onChange={changeFilter} />
        <Categories title='Категории'
                          categories={categories}
                          activeCategory={activeCategory} 
                          handleChangeInput={changeFilter} />
        <Button value='Сбросить фильтры' path='/' onClick={resetFilter} />
      </form>
    )  
  }
};

export default logRenderComponent(Filter);