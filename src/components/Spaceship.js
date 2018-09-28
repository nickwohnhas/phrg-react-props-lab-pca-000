import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
render() {
  return (
    <div className="spaceship">
      {this.props.name}
      {this.props.speed}
      {this.props.hasRockets}
      {this.props.colors}
      </div>
      );
    }
  }

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
};

export default Spaceship;
