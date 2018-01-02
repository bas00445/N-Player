export const addNote = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: note
  }
}

export const deleteNote = (noteID) => {
  return {
    type: 'DELETE_NOTE',
    payload: noteID
  }
}

export const checkoutNote = (noteID) => {
  return {
    type: 'CHECKOUT_NOTE',
    payload: noteID
  }
}

export const setFilterType = (type) => {
  return {
    type: 'SET_FILTER',
    payload: type
  }
}