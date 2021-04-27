import React from 'react';
import PropTypes from 'prop-types';

import logRenderComponent from '../../hocs/logRenderComponent';
import style from './Button.module.css';

const Button = (props) => {
    return (
      <button className={style.button} onClick={props.onClick} type="button">
        {props.value}
      </button>
    );
  };
  
  Button.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
export default logRenderComponent(Button);