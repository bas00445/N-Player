export const addNote = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: { note }
  }
}

export const deleteNote = (note) => {
  return {
    type: 'DELETE_NOTE',
    payload: { note }
  }
}

export const checkoutNote = (noteID) => {
  return {
    type: 'CHECKOUT_NOTE',
    payload: { noteID }
  }
}

export const setFilterType = (filterType) => {
  return {
    type: 'SET_FILTER',
    payload: { filterType }
  }
}