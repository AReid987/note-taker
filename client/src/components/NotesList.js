import React from 'react';

export const NotesList = ({ notes }) => {
  const renderNotes = notes.map(note =>
    <li key={note.id}>
      {note.title}
    </li>
  );

  return (
    <div>
      <ul>{ renderNotes }</ul>
    </div>
  )
}

export default NotesList
