import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  handleOnClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return(
      <button onClick={this.handleOnClick}>{this.state.count}</button>
    )
  }

}

export default Counter
