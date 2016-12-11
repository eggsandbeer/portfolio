import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import './Cubes.css';
import MainLineImage from './images/mainline.png';
import DataContainer from './components/DataContainer'

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
          <h1>Cameron Strandberg</h1>
          <p id="IntroText">
            Hi! I'm a front-end focused web engineer. I love javascript, css, typography, really good coffee, newspapers, the NBA, snowboards and working my butt off.
          </p>
          <img id="MainLine" src={MainLineImage} alt="main-line" />
          <DataContainer />
        </div>
      </div>
    );
  }
}

export default App;
