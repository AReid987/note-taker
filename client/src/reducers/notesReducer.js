export default function notesReducer(state = {
  loading: false,
  notes: [],
}, action) {

  switch (action.type) {
    case 'LOADING_NOTES':
      return Object.assign({}, state, { loading: true })

    case 'LOAD_ALL_NOTES':
      return { loading: false, notes: action.payload }

    case 'LOAD_NOTE':
      return [
        ...state.filter(note => note.id !== action.payload.id),
        Object.assign({}, action.payload)
      ]

    default:
      return state;
  }
};
