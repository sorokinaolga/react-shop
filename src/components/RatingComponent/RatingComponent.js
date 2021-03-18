import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './RatingComponent.css';

class RatingComponent extends Component {
  render() {
    return <div className={`star ${this.props.isFilled ? 'star-fill' : ''}`} />;
  }
};

RatingComponent.propTypes = {
  isFilled: PropTypes.bool
};

export default RatingComponent;
