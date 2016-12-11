import React, { Component } from 'react';
import './App.css';
import './Cubes.css';

class App extends Component {
  render() {
    return (
      <div className="TopLevelContainer">
        <div className="ContentContainer">
          <div id="CubeContainer">
            <div id="Cube">
              <div className="face1"></div>
              <div className="face2"></div>
              <div className="face3"></div>
              <div className="face4"></div>
              <div className="face5"></div>
              <div className="face6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
