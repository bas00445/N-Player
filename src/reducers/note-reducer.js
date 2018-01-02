const notes = [];

export default function (state = notes, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
      break;
    case 'DELETE_NOTE': {
      const newState = Object.assign([], state);
      newState.splice(action.payload, 1);
      return newState;
    } break;
    case 'CHECKOUT_NOTE':
      return state.map((note) => {
        if (note.id !== action.payload) {
          return note;
        } else {
          return Object.assign({}, note, { complete: !note.complete })
        }
      });
      break;
    case 'SET_FILTER':
      return action.payload.filter;
      break;

    default:
      return state;
      break;
  }
}