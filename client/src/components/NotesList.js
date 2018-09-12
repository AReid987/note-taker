import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotesList extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
    handleOnClick = () => {
      this.setState(
        { count: this.state.count + 1  }
      )
    }

  render(){
    const renderNotes = this.props.notes.notes.map(note =>
      <li className="list-group-item" key={note.id}>
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
        <button onClick={this.handleOnClick}>{this.state.count}</button>
        </li>
      );

      return (
        <div>
        <ul className="list-group">{ renderNotes }</ul>
        </div>
      )
  }
}

export default NotesList
