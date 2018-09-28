import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { fetchNotes } from '../actions/noteActions';
import { sortNotes } from '../actions/noteActions';

import NoteNew from './NoteNew'
import NoteShow from './NoteShow';
import NotesList from '../components/NotesList';

class NotesPage extends Component {


  componentDidMount() {
    this.props.fetchNotes();
  }

  // sortNotes = event => {
  //   let isSorted = this.props.notes.sorted
  //   let sortedNotes = this.props.notes.notes.sort( function(a, b){
  //                       if (isSorted === false) {
  //
  //                         return b.count - a.count
  //                       } else {
  //                         return a.count - b.count
  //                       }
  //                       })
  //
  //
  //
  //   this.setState({ notes: sortedNotes, sorted: !isSorted })
  //
  // }

  render() {
    const { match, notes } = this.props

    return (

      <div className="col-md-12">
        <h1>
          Notes
          <Link
            style={{ marginLeft: '12px' }}
            to={'/notes/new'} className="btn btn-primary">
            Add Note
          </Link>
          <button onClick={this.props.sortNotes} className="btn btn-primary">Sort Notes</button>

        </h1>
        <div className="col-md-6">
          <NotesList
            notes={notes} />
        </div>
        <div className="col-md-6">
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
    },
    sortNotes: () => {
      dispatch(sortNotes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage)
