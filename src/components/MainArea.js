import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as ReactFauxDOM from 'react-faux-dom';
import ImageLoader from './ImageLoader';
import './MainArea.css';

class MainArea extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageWidth : 0
    };
  }
  _onLoad(e) {
    // console.log(e.target.offsetHeight)
    this.setState({
      imageHeight: e.target.offsetHeight
    });
  }
  onThumbNailLoad(key, e){
    console.log('THUMBNAIL LOAD', key+'Height')
    this.setState({
       [key+'Height']: e.target.offsetHeight
    });
  }
  render(){


    return(
      <div className={"MainArea col-md-9"}>

          <div ref={(input) => { this.heightcontainer = input; }} key={this.props.set.id}>
            <h3 key="h3">{this.props.set.title}</h3>
            <p>
              <a href={this.props.set.url}>
                {this.props.set.urltitle}
              </a>
            </p>
            <hr />
            <p>
              {this.props.set.content}
            </p>
            {this.props.set.images.map((set, i) =>
              <ImageLoader
                thumbnailimage={process.env.PUBLIC_URL+'/images/work/'+this.props.set.id+'.'+(i+1)+'.thumbnail.png'}
                fullimage={process.env.PUBLIC_URL+'/images/work/'+this.props.set.id+'.'+(i+1)+'.png'}
              />
            )}
          </div>

      </div>
    );
  }
}

export default MainArea;
