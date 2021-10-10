
import React from 'react';
import PropTypes from 'prop-types';

import withInputNumberValidation from '../../hocs/withInputNumberValidation';
import logRenderComponent from '../../hocs/logRenderComponent';
import style from './InputNumber.module.css';

const InputNumber = (props) => {
  const { name, value, onChange } = props;

  return (
    <input
      className={style.filter_input}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

InputNumber.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default withInputNumberValidation(logRenderComponent(InputNumber));