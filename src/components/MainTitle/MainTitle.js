import React from 'react';
import './MainTitle.css';

class MainTitle extends React.Component {
  render() {
    return <h1 className="main-title">{this.props.children}</h1>;
  }
}

export default MainTitle;
