import React from 'react';
import PropTypes from 'prop-types';

import logRenderComponent from '../../hocs/logRenderComponent';
import Category from '../Category/Category';
import style from './Categories.module.css';


const Categories = (props) => {
  const { title, categories, activeCategory } = props;

  return (
    <>
      <h3 className={style.filter_title}>{title}</h3>
      <div className={style.filter_category}>
        {categories.map((item, index) => (
          <Category key={index} name={item} active={activeCategory} />
        ))}
      </div>
    </>
  );
};

Categories.propTypes = {
  title: PropTypes.string.isRequired,
};

export default logRenderComponent(Categories);