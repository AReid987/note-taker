import React, { Component } from 'react';
import { connect } from 'react-redux';

import NoteForm from '../components/NoteForm';

class NoteShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false

    }
  }

  handleOnClick = event => {
    this.setState({
      isEditing: !this.state.isEditing,
      note: this.props.note
    })
  }

  render(){
    if (this.state.isEditing) {
      return (
        <div>
          <h1>Edit Note</h1>
          <NoteForm note={this.state.note} />
        </div>
      )
    }
    return(
      <div>
        <h2>{this.props.note.title}</h2>
        <p>{this.props.note.content}</p>
        <button onClick={this.handleOnClick}>Edit</button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {

  const note = state.notes.notes.find(note => note.id == ownProps.match.params.noteId)

  if (note) {
    return { note: note }
  } else {
    return { note: {} }
  }
};

export default connect(mapStateToProps)(NoteShow);
