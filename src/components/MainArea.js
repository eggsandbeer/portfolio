import React, { Component } from 'react';

class MainArea extends Component {
  render(){
    return(
      <div className="col-md-9">
        {this.props.set.title}
      </div>
    );
  }
}

export default MainArea;
