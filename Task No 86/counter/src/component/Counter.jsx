import React, { Component } from 'react'

export default class Counter extends Component {

  state = {
    counter: 0
  };

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}>
          <button  style={{backgroundColor:'lightblue'}} onClick={this.onIncrement}>+</button>

          <h4 style={{padding:'30px'}}>{this.state.counter}</h4>

          <button style={{backgroundColor:'lightblue'}} onClick={this.onDecrement}>-</button>
        </div>
      </div>
    );
  }
}
