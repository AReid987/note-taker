import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchNotes } from '../actions/noteActions';
import NotesList from '../components/NotesList';
import NoteShow from './NoteShow';

class NotesPage extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <div>
          <NotesList notes={this.props.notes} />
          <Switch>
            <Route path="/notes/:id" component={NoteShow} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => {
      dispatch(fetchNotes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage)
