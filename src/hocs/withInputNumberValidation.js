import React from 'react';
import { toInt } from 'csssr-school-utils';

export default HoccedComponent => {
  class withInputNumberValidation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: props.value,
      };
    }

    handleChange = events => {
      const newValue = toInt(events.target.value);

      if (newValue !== this.state.value) {
        this.setState({
          value: newValue,
        });

        if (this.props.onChange) {
          this.props.onChange(newValue);
        }
      }
    };

    render() {
      return <HoccedComponent {...this.props} value={this.state.value} onChange={this.handleChange} />;
    }
  }

  return withInputNumberValidation;
};