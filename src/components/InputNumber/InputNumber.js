
import React from 'react';
import PropTypes from 'prop-types';

import withInputNumberValidation from '../../hocs/withInputNumberValidation';
import logRenderComponent from '../../hocs/logRenderComponent';
import style from './InputNumber.module.css';

const InputNumber = props => {
  return (
    <input
      className={style.filter_input}
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

InputNumber.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default withInputNumberValidation(logRenderComponent(InputNumber));