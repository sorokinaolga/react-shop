import React from 'react';
import { logger } from 'csssr-school-utils';
import shallowCompare from 'react-addons-shallow-compare';

export default HoccedComponent => {
  class logRenderComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (shallowCompare(this, nextProps, nextState)) {
        logger.call(this, logRenderComponent.displayName, nextProps, nextState);
        return true;
      }
      return false;
    }

    render() {
      return <HoccedComponent {...this.props} />;
    }
  }

  logRenderComponent.displayName = `logRender(${HoccedComponent.displayName || HoccedComponent.name || 'Component'})`;
  return logRenderComponent;
};