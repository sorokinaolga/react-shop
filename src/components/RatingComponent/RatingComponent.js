import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './RatingComponent.module.css';

class RatingComponent extends Component {
  render() {
    return <div className={style.star + ' ' + (this.props.isFilled ? style.star_fill : '')} />;
  }
};

RatingComponent.propTypes = {
  isFilled: PropTypes.bool
};

export default RatingComponent;
