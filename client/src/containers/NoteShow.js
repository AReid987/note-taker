import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteShow extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      isEditing: false
    }
  }

  render(){

    return(
      <div>
        <h2>{this.props.note.title}</h2>
        <p>{this.props.note.content}</p>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {

  const note = state.notes.notes.find(note => note.id == ownProps.match.params.noteId)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
};

export default connect(mapStateToProps)(NoteShow);
