export default function notesReducer(state = {
  loading: false,
  saving: false,
  notes: [],
  note: ''
}, action) {

  switch (action.type) {
    case 'LOADING_NOTES':
      return Object.assign({}, state, { loading: true })

    case 'LOAD_ALL_NOTES':
      return { loading: false, notes: action.payload }

    case 'LOAD_NOTE':
      return Object.assign({}, state, { loading: false, note: action.payload})

    case 'SAVING_NOTE':
      return Object.assign({}, state, { saving: true })

    case 'SAVE_NOTE':
      return Object.assign({}, state, { saving: false, note: action.payload})

    default:
      return state;
  }
};
