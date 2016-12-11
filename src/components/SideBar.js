import React, { Component } from 'react';

class SideBar extends Component {
  render(){
    return(
      <ul>
      {this.props.dataset.map((set, i) =>
        <li onClick={() => this.props.handleActiveClick(i)} key={i}>
          {set.title}
        </li>
      )}
      </ul>
    );
  }
}

export default SideBar;
