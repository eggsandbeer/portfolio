import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import './Cubes.css';
import MainLineImage from './images/mainline.png';
import ProfileImage from './images/profile.png';
import DataContainer from './components/DataContainer';

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
          <div className="container">
            <DataContainer />
            <div id="Footer" className="row">
              <div className="col-md-7">
                <h3>All About Me</h3>
                <ul>
                  <li>
                    <img alt="Just a little shot of me, Cameron Strandberg" src={ProfileImage} />
                    Cameron Strandberg is a web developer. He is a graduate of the Electronic Media Design program offered at Langara College in Vancouver, BC. He's a geek, a big thinker, a gregarious personality and a lover of all things that go down big hills fast. He has been building websites for most of his life, but has been doing it professionally for about four years now. He's basically in love with javascript. Once upon a time, he was a full time journalist for a series of newspapers accross Canada, but the horrors of a world without print convinced him to change his mind real quick. If you have freelance work or any thing else you'd like to talk to him about, feel free to drop him a line.
                  </li>
                </ul>
              </div>
              <div className="col-md-5">
                <h3>Links</h3>
                <ul className="contact">
                  <li><a href="mailto:cameron.strandberg@gmail.com">Email</a></li>
                  <li><a href="http://www.linkedin.com/pub/cameron-strandberg/6/a90/603">LinkedIn</a></li>
                  <li><a href="https://twitter.com/eggsandbeer">Twitter</a></li>
                  <li><a href="https://github.com/eggsandbeer">Github</a></li>
                </ul>
              </div>
            </div>
            <div id="FinePrint" className="row">
              <div className="col-md-12">
                <img id="MainLine" src={MainLineImage} alt="main-line" />
                <div id="CubeSmallContainer">
                  <div id="CubeSmall">
                    <div className="face1"></div>
                    <div className="face2"></div>
                    <div className="face3"></div>
                    <div className="face4"></div>
                    <div className="face5"></div>
                    <div className="face6"></div>
                  </div>
                </div>
                <p id="small">
                  cameronstrandberg.com is coded by Cameron Strandberg using React/create-react-app and hosted through github pages | All work &#169; Cameron Strandberg 2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
