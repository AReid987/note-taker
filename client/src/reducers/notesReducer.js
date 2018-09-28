

export default function notesReducer(state = {
  loading: false,
  saving: false,
  sorted: false,
  notes: [],
  note: ''
}, action) {

  switch (action.type) {
    case 'LOADING_NOTES':
      return Object.assign({}, state, { loading: true })

    case 'LOAD_ALL_NOTES':
      return { loading: false, notes: action.payload, sorted: false }

    case 'LOAD_NOTE':
      return Object.assign({}, state, { loading: false, note: action.payload})

    case 'SAVING_NOTE':
      return Object.assign({}, state, { saving: true })

    case 'SAVE_NOTE':
      const note = action.payload

      return {
        ...state,
        saving: false,
        notes: [ ...state.notes, note],
        note: note
      }

    case 'SORT_NOTE':
    const sortedNotes = state.notes.sort( function(a, b){
                          if (state.sorted === false) {
                            return b.count - a.count
                          } else {
                            return a.count - b.count
                          }
                          })
      console.log(sortedNotes)
      return {
        ...state,
        notes: sortedNotes,
        sorted: !state.sorted
      }

    default:
      return state;
  }
};
