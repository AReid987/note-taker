import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveNote } from '../actions/noteActions';
import NoteForm from '../components/NoteForm';

class NoteNew extends Component {

  constructor(props){
    super(props);
    this.state = {
      note: {
        title: '',
        content: '',
      },
      saving: false
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { saveNote, history } = this.props
    console.log('A')
    saveNote(this.state.note)
    console.log('B')
    this.setState({
      saving: !this.state.saving
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

  render(){
    return (
      <div>
        <h1>New Note</h1>
        <NoteForm
          note={this.state.note}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit} />
      </div>
    )
  }
}

export default connect(null, { saveNote })(NoteNew)
