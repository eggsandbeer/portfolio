import React, { Component } from 'react';
import SideBar from './SideBar';
import Data from '../data/data.json';

class DataContainer extends Component {
  constructor(props){
    console.log(Data)
    super(props);
    this.state = {
      dataset: Data,
      activeSet: Data[0]
    };
  }
  handleActiveClick(i){
    this.setState({
      activeSet: this.state.dataset[i]
    });
  }
  render(){
    return(
      <div>
        <SideBar handleActiveClick={this.handleActiveClick.bind(this)} dataset={this.state.dataset} />
        {this.state.activeSet.title}
      </div>
    )
  }
}

export default DataContainer;
