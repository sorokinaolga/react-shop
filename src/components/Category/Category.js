import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Category.module.css';

const Category = (props) => {
  return (
    <Link to={{search: `category=${props.name}`}} 
          className={`${style.category} ${props.name === props.active ? style.active : ''}`}>
      {props.name}
    </Link>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default logRenderComponent(Category);