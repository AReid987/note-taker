import React from 'react';
import { Link } from 'react-router-dom';

export const NotesList = ({ notes }) => {
  const renderNotes = notes.notes.map(note =>
    <li key={note.id}>
      <Link to={`/notes/${note.id}`}>{note.title}</Link>
    </li>
  );

  return (
    <div>
      <ul>{ renderNotes }</ul>
    </div>
  )
}

export default NotesList
