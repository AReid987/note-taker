import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../containers/Counter';

const NotesList = props => {
  const renderNotes = props.notes.notes.map(note =>
    <li className="list-group-item" key={note.id}>
      <Link to={`/notes/${note.id}`}>{note.title}</Link>
      <Counter note={note}/>
      </li>
    );

    return (
      <div>
      <ul className="list-group">{ renderNotes }</ul>
      </div>
    )

}

export default NotesList
