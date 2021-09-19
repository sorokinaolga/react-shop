import React from 'react';

import logRenderComponent from '../../hocs/logRenderComponent';
import InputNumber from '../InputNumber/InputNumber';
import style from './PriceFilter.module.css';

class PriceFilter extends React.Component {
  render() {
    const { title, minPrice, maxPrice, handleChangeInput } = this.props;

    return (
      <>
        <h3 className={style.filter_title}>{title}</h3>
        <div className={style.filter_row}>
          <div>
            <label className={style.filter_label} htmlFor="from">от </label>
            <InputNumber name="minPrice" value={minPrice} onChange={handleChangeInput} />
          </div>
          <div>
            <label className={style.filter_label} htmlFor="to">до </label>
            <InputNumber name="maxPrice" value={maxPrice} onChange={handleChangeInput} />
          </div>
        </div>
      </>
    )
  }
};
  
export default logRenderComponent(PriceFilter);