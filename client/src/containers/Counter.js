import React, { Component } from 'react';

class Counter extends Component {

  constructor(){
    super()
    this.state = {
      count: 0
    }
  };

  componentDidMount() {
    fetch(`http://localhost:3001/api/notes/${this.props.note.id}`)
    .then(response => response.json())
    .then(note => this.setState({ count: note.count }))
  }

  handleOnClick = event => {
    fetch(`http://localhost:3001/api/notes/${this.props.note.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ count: this.state.count + 1 })
      })
      .then(response => response.json())
      .then(note => this.setState({ count: note.count }))

  }

  render() {
    return(
      <div>
        <button
          className="btn btn-primary"
          onClick={this.handleOnClick}>
            {this.state.count}
        </button>
      </div>
    )
  }

}

export default Counter
