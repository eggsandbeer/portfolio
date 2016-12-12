import React, { Component } from 'react';
import './MainArea.css';

class ImageLoader extends Component {
  componentDidMount(){
    const placeholder = this.placeholder;

    var imgLarge = new Image();
    imgLarge.src = this.props.fullimage;
    imgLarge.onload = function () {
      imgLarge.classList.add('loaded');
    };
    placeholder.appendChild(imgLarge);
  }
  smallOnLoad() {
    this.smallplaceholder.classList.add('loaded');
  }
  render(){
    return(
      <div ref={(placeholder) => {this.placeholder = placeholder}} className="placeholder">
        <img
          ref={(smallplaceholder) => {this.smallplaceholder = smallplaceholder}}
          src={this.props.thumbnailimage}
          className="imgSmall"
          onLoad={this.smallOnLoad.bind(this)}
        />
        <div style={{paddingBottom: "66.6%"}}></div>
      </div>
    );
  }
}

export default ImageLoader;
