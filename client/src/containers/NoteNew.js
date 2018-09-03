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

  render(){
    return (
      <div>
        <h1>New Note</h1>
      </div>
    )
  }
}

export default NoteNew
