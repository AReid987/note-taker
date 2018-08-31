import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';
import NotesList from '../components/NotesList';

class NotesPage extends Component {

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <div>
          <NotesList notes={this.props.notes} />
        </div>
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
