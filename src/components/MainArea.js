import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ImageLoader from './ImageLoader';
import './MainArea.css';

class MainArea extends Component {
  render(){
    return(
      <div className={"MainArea col-md-9"}>
        <ReactCSSTransitionGroup
          transitionName="switch"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
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
                ratio={set.ratio}
              />
            )}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default MainArea;
