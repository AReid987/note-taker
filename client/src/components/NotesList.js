import React from 'react';
import { Link } from 'react-router-dom';

export const NotesList = ({ notes }) => {
  const renderNotes = notes.notes.map(note =>
    <li className="list-group-item" key={note.id}>
      <Link to={`/notes/${note.id}`}>{note.title}</Link>
    </li>
  );

  return (
    <div>
      <ul className="list-group">{ renderNotes }</ul>
    </div>
  )
}

export default NotesList
