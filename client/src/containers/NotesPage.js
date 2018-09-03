import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { fetchNotes } from '../actions/noteActions';

import NoteNew from './NoteNew'
import NoteShow from './NoteShow';
import NotesList from '../components/NotesList';

class NotesPage extends Component {


  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { match, notes } = this.props

    return (
      <div>
        <h1>
          Notes
          <Link to={'/notes/new'}>Add Note</Link>
        </h1>
        <div>
          <NotesList notes={notes} />
          <Switch>
            <Route path={`${match.url}/new`} component={NoteNew} />
            <Route path={`${match.url}/:noteId`} component={NoteShow} />
          </Switch>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => {
      dispatch(fetchNotes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage)
