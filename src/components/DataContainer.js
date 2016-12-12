import React, { Component } from 'react';
import SideBar from './SideBar';
import MainArea from './MainArea';
import Data from '../data/data.json';
import * as ReactFauxDOM from 'react-faux-dom';

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
      <div className="row">
        <SideBar
          handleActiveClick={this.handleActiveClick.bind(this)}
          dataset={this.state.dataset}
        />
        <MainArea
          set={this.state.activeSet}
        />
      </div>
    )
  }
}

export default DataContainer;
