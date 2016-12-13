import React, { Component } from 'react';
import './MainArea.css';

class ImageLoader extends Component {
  componentDidMount(){
    // setTimeout(() => {
    const placeholder = this.placeholder;
    const imgLarge = new Image();
    imgLarge.src = this.props.fullimage;
    imgLarge.onload = () => {
      imgLarge.classList.add('loaded');
    };
    placeholder.appendChild(imgLarge);
    // }, 1000)
  }
  smallOnLoad() {
    this.smallplaceholder.classList.add('loaded');
  }
  render(){
    return(
      <div className="placeholderBorder">
        <div ref={(placeholder) => {this.placeholder = placeholder}} className="placeholder">
          <img
            ref={(smallplaceholder) => {this.smallplaceholder = smallplaceholder}}
            src={this.props.thumbnailimage}
            className="imgSmall"
            onLoad={this.smallOnLoad.bind(this)}
          />
          <div style={{paddingBottom: this.props.ratio}}></div>
        </div>
      </div>
    );
  }
}

export default ImageLoader;
