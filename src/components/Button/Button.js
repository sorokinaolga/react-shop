import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Button.module.css';

const Button = (props) => {
    return (
      <Link className={`${style.button} ${props.disabled && style.disabled}`} to={props.path} onClick={props.onClick} >
        {props.value}
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