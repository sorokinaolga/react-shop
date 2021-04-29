
import React from 'react';
import PropTypes from 'prop-types';

import logRenderComponent from '../../hocs/logRenderComponent';
import Category from '../Category/Category';
import style from './Categories.module.css';


const Categories = (props) => {
  return (
    <React.Fragment>
      <h3 className={style.filter_title}>{props.title}</h3>
      <div className={style.filter_category}>
        {props.categories.map((item, index) => (
          <Category key={index} name={item} active={props.activeCategory} onClick={props.handleChangeInput} />
        ))}
      </div>
    </React.Fragment>
  );
};

Categories.propTypes = {
  title: PropTypes.string.isRequired,
};

export default logRenderComponent(Categories);