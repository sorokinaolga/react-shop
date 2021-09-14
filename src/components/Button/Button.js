import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Button.module.css';

const Button = (props) => {
  const { disabled, path, onClick, value } = props;
  
  return (
    <Link className={`${style.button} ${disabled && style.disabled}`} to={path} onClick={onClick} >
      {value}
    </Link>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  disabled: PropTypes.bool,
};
  
export default logRenderComponent(Button);