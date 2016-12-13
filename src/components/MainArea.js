import React, { Component } from 'react';
import ImageLoader from './ImageLoader';
import './MainArea.css';

class MainArea extends Component {
  render(){
    return(
      <div className={"MainArea col-md-9"}>
        <div ref={(input) => { this.heightcontainer = input; }} key={this.props.set.id}>
          <h3 className={this.props.set.id} key="h3">{this.props.set.title}</h3>
          <p>
            <a href={this.props.set.url}>
              {this.props.set.urltitle}
            </a>
          </p>
          <hr className={this.props.set.id} />
          <p className={this.props.set.id}>
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
      </div>
    );
  }
}

export default MainArea;
