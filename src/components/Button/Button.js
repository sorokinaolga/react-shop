import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Button.module.css';

const Button = (props) => {
    return (
      <Link className={style.button} to={props.path} onClick={() => {props.handleReset()}}>
        {props.value}
      </Link>
    );
  };
  
  Button.propTypes = {
    to: PropTypes.string.isRequired,
  };
  
export default logRenderComponent(Button);