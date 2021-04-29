import React from 'react';

import logRenderComponent from '../../hocs/logRenderComponent';
import InputNumber from '../InputNumber/InputNumber';
import style from './PriceFilter.module.css';

class PriceFilter extends React.Component {
  
    render() {
      return (
        <React.Fragment>
          <h3 className={style.filter_title}>{this.props.title}</h3>
          <div className={style.filter_row}>
            <div className={style.filter_price}>
              <label className={style.filter_label} htmlFor="from">от</label>
              <InputNumber name="minPrice" value={this.props.minPrice} onChange={this.props.handleChangeInput} />
            </div>
            <div className={style.filter_price}>
              <label className={style.filter_label} htmlFor="to">до</label>
              <InputNumber name="maxPrice" value={this.props.maxPrice} onChange={this.props.handleChangeInput} />
            </div>
          </div>
        </React.Fragment>
      )
    }
  
  };
  
  
  export default logRenderComponent(PriceFilter);