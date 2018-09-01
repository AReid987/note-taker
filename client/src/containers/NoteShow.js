import React from 'react';
import { connect } from 'react-redux';

const NoteShow = ({ note }) =>
  <div>
    <h2>{note.title}</h2>
    <p>{note.content}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.find(note => note.id == ownProps.match.params.id)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
};

export default connect(mapStateToProps)(NoteShow);
