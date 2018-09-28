export function fetchNotes(){
  return (dispatch) => {
    dispatch({ type: 'LOADING_NOTES' });
    return fetch('http://localhost:3001/api/notes')
      .then(response => response.json())
      .then(notes => dispatch({ type: 'LOAD_ALL_NOTES', payload: notes })
    )
  };
}

export function updateNote(note){
  return (dispatch) => {
    dispatch({type: 'LOADING_NOTES'});
    return fetch(`http://localhost:3001/api/notes/${note.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ note: note })
      })
      .then(response => response.json())
      .then(note => dispatch({ type: 'LOAD_NOTE', payload: note })
    )
  }
}

export function saveNote(note){
  return (dispatch) => {
    dispatch({type: 'SAVING_NOTE'});
    return fetch('http://localhost:3001/api/notes', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ note: note })
      })
      .then(response => response.json())
      .then(note => {
        dispatch({ type: 'SAVE_NOTE', payload: note})}
    )
  }
}

export function sortNotes(notes){
  return (dispatch) => {
    dispatch({type: 'SORT_NOTE'});
  }
}
