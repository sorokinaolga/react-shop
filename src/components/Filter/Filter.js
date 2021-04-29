
import React from 'react';

import { DataContext } from '../..';
import logRenderComponent from '../../hocs/logRenderComponent';
import InputDiscount from '../InputDiscount/InputDiscount';
import PriceFilter from '../PriceFilter/PriceFilter';
import Categories from '../Categories/Categories';
import Button from '../Button/Button';

class Filter extends React.Component {

  render() {
    return (
      <DataContext.Consumer>
        {({
          maxPrice,
          minPrice,
          discount,
          categories,
          activeCategory,
          handleChangeInput,
          handleResetInput,
        }) => (
            <form>
              <PriceFilter title="Цена" 
                            minPrice={minPrice}
                            maxPrice={maxPrice} 
                            handleChangeInput={handleChangeInput} />
              <InputDiscount title="Скидка" 
                            name="discount" 
                            value={discount} 
                            onChange={handleChangeInput} />
              <Categories title="Категории"
                          categories={categories}
                          handleChangeInput={handleChangeInput}
                          activeCategory={activeCategory} />
              <Button value="Сбросить фильтры" onClick={handleResetInput} />
            </form>
        )}  
      </DataContext.Consumer>
    )
  }

};


export default logRenderComponent(Filter);