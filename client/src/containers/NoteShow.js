import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateNote } from '../actions/noteActions';
import NoteForm from '../components/NoteForm';

class NoteShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      note: this.props.note
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { updateNote } = this.props
    updateNote(this.state.note)
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleOnChange = event => {
    const field = event.target.name
    const note = this.state.note
    note[field] = event.target.value
    this.setState({
      note: note
    })
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
          <NoteForm
            note={this.state.note}
            button={this.state.isEditing}
            onChange={this.handleOnChange}
            onSubmit={this.handleOnSubmit} />
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


export default connect(mapStateToProps, { updateNote })(NoteShow);
