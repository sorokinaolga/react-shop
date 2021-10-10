import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Category.module.css';

const Category = (props) => {
  const { name, active, } = props;

  return (
    <Link to={{search: `category=${name}`}} 
          className={`${style.category} ${name === active ? style.active : ''}`}>
      {name}
    </Link>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default logRenderComponent(Category);