import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateOnChange from 'react-animate-on-change';
import './MainArea.css';

class MainArea extends Component {
  render(){
    return(
      <div className={"MainArea col-md-9"}>
        <ReactCSSTransitionGroup transitionName="switch">
          <div key={this.props.set.id}>
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
              <img key={i} src={process.env.PUBLIC_URL+'/images/work/'+this.props.set.id+'.'+(i+1)+'.png'} role="presentation" />
            )}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default MainArea;
