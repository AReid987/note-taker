import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          onChange={this.handleOnChange} />
      </div>
    )
  }
}

export default NoteNew
