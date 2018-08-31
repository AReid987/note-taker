export function fetchNotes(){
  return (dispatch) => {
    dispatch({ type: 'LOADING_NOTES' });
    return fetch('http://localhost:3001/api/notes')
      .then(response => response.json())
      .then(notes => dispatch({ type: 'LOAD_ALL_NOTES', payload: notes }))
  }
}
