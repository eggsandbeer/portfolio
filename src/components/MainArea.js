import React, { Component } from 'react';
import './MainArea.css';

class MainArea extends Component {
  render(){
    return(
      <div className="MainArea col-md-9">
        {this.props.set.title}
        {this.props.set.images.map((set, i) =>
          <img src={process.env.PUBLIC_URL+'/images/work/'+this.props.set.id+'.'+(i+1)+'.png'} role="presentation" />
        )}
      </div>
    );
  }
}

export default MainArea;
