import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeKey: 0
    };
  }
  handleSetActive(i){
    this.setState({
      activeKey: i
    });
    this.props.handleActiveClick(i);
  }
  render(){
    return(
      <div className="col-md-3">
        <h3>Portfolio</h3>
        <ul id="SideBar">
        {this.props.dataset.map((set, i) =>
          <li className={this.state.activeKey === i ? 'ActiveSideBarItem' : ''} onClick={() => this.handleSetActive(i)} key={i}>
            {set.title}
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default SideBar;
