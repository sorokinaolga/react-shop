import React from 'react';
import PropTypes from 'prop-types';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Category.module.css';

const Category = (props) => {
  const handleClick = () => {
    props.onClick('activeCategory', props.name);
    window.history.pushState({}, '', props.name);
  };
  return (
    <button className={`${style.category} ${props.name === props.active ? style.active_category : ''}`} 
            onClick={handleClick}
            type="button">{props.name}</button>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default logRenderComponent(Category);