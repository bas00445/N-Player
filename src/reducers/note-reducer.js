const notes = [];

export default function (state = notes, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload.note];
      break;
    case 'DELETE_NOTE': {
      const newState = Object.assign([], state);
      const indexToDel = newState.indexOf(action.payload.note);
      newState.splice(indexToDel, 1);
      return newState;
    } break;
    case 'CHECKOUT_NOTE':
      return state.map((note) => {
        if (note.id !== action.payload.noteID) {
          return note;
        } else {
          return Object.assign({}, note, { complete: !note.complete })
        }
      });
      break;
    default:
      return state;
      break;
  }
}