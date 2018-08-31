import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';
import NotesList from '../components/NotesList';

class NotesPage extends Component {

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps)(NotesPage)
